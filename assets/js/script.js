// day.js function to display date and time at the top of the page
function setCurrentDay() {
  const currentDayStr = dayjs().format("dddd, MMMM DD");
  const currentDayEl = $("#currentDay");
  currentDayEl.text(currentDayStr);
}

setCurrentDay();

// function to display selected dropdown item using user input
$(document).ready(function () {
  $(".dropdown-item").click(function () {
    var selectedGenre = $(this).text();
    $("#dropdownInput").val(selectedGenre);
  });
});

// Function to fetch and display a random artist
function getRandomArtist() {
  const selectedGenre = $('#dropdownInput').val();

  // Make a request to the MusicBrainz API to get a random artist based on the selected genre
  // Use the selected genre to construct the API request
  let apiUrl = `https://musicbrainz.org/ws/2/artist?query=tag:${selectedGenre}&fmt=json&limit=100`;
  //Clear previous event display search
  document.querySelector('#events').innerHTML = '';
  // Make a fetch request to the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Get a random artist from the response
      let randomArtist = data.artists[Math.floor(Math.random() * data.artists.length)];

      // Display the random artist on the webpage
      displayRandomArtist(randomArtist);

      // Call the getTopTenAlbums function to fetch and display the top ten albums
      getTopTenAlbums(randomArtist.id);

      // Get upcoming events after displaying the random artist
      getUpcomingEvents(randomArtist.name);
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
}

// Function to display the random artist on the webpage
function displayRandomArtist(artist) {
  $('#artists').html(`<p><strong>Random Artist:</strong> ${artist.name}</p>`);
}

// Function to fetch and display the top ten albums of the random artist
function getTopTenAlbums(artistId) {
  const apiUrl = `https://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=10`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const uniqueAlbums = filterUniqueAlbums(data.releases.slice(0, 10));
      displayTopTenAlbums(uniqueAlbums);
    })
    .catch(error => console.error('Error fetching album data:', error));
}

// Function to filter out duplicate album names
function filterUniqueAlbums(albums) {
  const uniqueAlbums = albums.filter((album, index, self) =>
    index === self.findIndex((a) => a.title === album.title)
  );
  return uniqueAlbums;
}

// Function to display the top ten albums on the webpage
function displayTopTenAlbums(albums) {
  $('#albums').html('<p><strong>Top Ten Albums:</strong></p><ul>' +
    albums.map(album => `<li>${album.title}</li>`).join('') +
    '</ul>');
}


// Function to get upcoming events using the MusicBrainz API
function getUpcomingEvents(artist) {
  // Make a request to the MusicBrainz API to get upcoming events
  let apiUrl = `https://www.jambase.com/jb-api/v1/events?artistName=${artist}&apikey=eaaa6772-d2ca-4b1b-8a89-5564b5d71967`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Display the upcoming events on the webpage
      console.log(data);
      createMusicEventsList(data.events);
    })
    .catch(error => {
      console.log('Error fetching upcoming events:', error);
    });
}

// Function to display music events, is called by
function createMusicEventsList(event) {

  let eventsRow = $('#events');
  eventsRow.empty();
  eventsRow.addClass('row');
  // Loop to display max 10 events from a list or any available events
  // Loop dynamically creates all the available events
  if (event.length > 0) {
    for (let i = 0; i < Math.min(10, event.length); i++) {

      let eventContainer = $('<div>').addClass('col-2 m-2');
      let eventDateEl = $('<p>');
      let eventVenueEl = $('<p>');
      let eventCountryEl = $('<p>');

      let eventStartDate = event[i].startDate;
      let eventVenue = event[i].location.name;
      let eventCountry = event[i].location.address.addressCountry.name;

      eventDateEl.text(`Date of the Event: ${eventStartDate}`);
      eventVenueEl.text(`Venue: ${eventVenue}`);
      eventCountryEl.text(`Country: ${eventCountry}`);

      eventContainer.append(eventDateEl, eventVenueEl, eventCountryEl);
      eventsRow.append(eventContainer);
    }
    // If there are no events, a message is displayed.
  } else {
    let noEventsText = 'No Events Available At The Time Of This Search.';
    let noEventsTextEl = $('<p>').text(noEventsText);
    eventsRow.append(noEventsTextEl);
  }
}

// Click event to start the function
$('.customButton').on('click', getRandomArtist);

// Search history button, clear button, and pop-up
// Function to get search history from local storage
function getSearchHistory() {
  const searchHistoryString = localStorage.getItem('searchHistory');
  return searchHistoryString ? JSON.parse(searchHistoryString) : [];
}

// Function to save search history to local storage
function saveSearchHistory(searchHistory) {
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

// Function to display search history
function showSearchHistory() {
  const searchHistory = getSearchHistory();
  const searchHistoryList = $('#searchHistoryList');

  searchHistoryList.empty();

  searchHistory.forEach(entry => {
    const listItem = $('<li>').text(entry);
    searchHistoryList.append(listItem);
  });

  $('#searchHistoryPopup').css('display', 'block');
}

// Function to erase search history
function eraseSearchHistory() {
  // Clear search history in local storage
  saveSearchHistory([]);

  // Close the popup after erasing
  closeSearchHistoryPopup();
}

// Function to close search history popup
function closeSearchHistoryPopup() {
  $('#searchHistoryPopup').css('display', 'none');
}

// Function to retrieve and log the selected genre into local storage
function submitGenre() {
  const selectedGenre = $('#dropdownInput').val();
  if (selectedGenre) {
    // Retrieve existing search history from local storage
    const searchHistory = getSearchHistory();

    // Add the selected genre to the search history
    searchHistory.push(selectedGenre);

    // Save the updated search history to local storage
    saveSearchHistory(searchHistory);

  } else {
    // Handle the case where no genre is selected
    alert('Please select a genre before submitting.');
  }
}
