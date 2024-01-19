// day.js function to display date and time at the top of the page
function setCurrentDay() {
  const currentDayStr = dayjs().format("dddd, MMMM DD");
  const currentDayEl = $("#currentDay");
  currentDayEl.text(currentDayStr);
}

setCurrentDay();

// function to display selected dropdown item using user input
$(document).ready(function() {
    $(".dropdown-item").click(function() {
      var selectedGenre = $(this).text();
      $("#dropdownInput").val(selectedGenre);
    });
  });

// Function to get a random artist based on the selected genre and era
function getRandomArtist() {
  // Get the selected genre from the dropdown
  let selectedGenre = $('#dropdownInput').val();

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
          console.log('Error fetching data:', error);});
}

// Function to display the random artist on the webpage
function displayRandomArtist(artist) {
  // Display the random artist's name in the results section
  let resultForm = $('.resultForm');
  resultForm.html(`<p><strong>Random Artist:</strong> ${artist.name}</p>`);
}

// Function to get the top ten albums of the random artist
function getTopTenAlbums(artistId) {
  // Make a request to the MusicBrainz API to get the albums of the selected artist
  let apiUrl = `https://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=10`;

  // Make a fetch request to the API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Get the top ten albums from the response
          let topTenAlbums = data.releases.slice(0, 10);

          // Display the top ten albums on the webpage
          displayTopTenAlbums(topTenAlbums);
      })
      .catch(error => {
          console.log('Error fetching album data:', error);
      });
}

// Function to display the top ten albums on the webpage
function displayTopTenAlbums(albums) {
  // Display the top ten albums in the results section
  let resultForm = $('.resultForm');
  let albumList = '<p><strong>Top Ten Albums:</strong></p><ul>';
  albums.forEach(album => {
      albumList += `<li>${album.title}</li>`;
  });
  albumList += '</ul>';
  resultForm.append(albumList);
}

// Function to get upcoming events using the MusicBrainz API
function getUpcomingEvents(artist) {
  // Make a request to the MusicBrainz API to get upcoming events
  let apiUrl = `https://www.jambase.com/jb-api/v1/events?artistName=${artist}&apikey=eaaa6772-d2ca-4b1b-8a89-5564b5d71967`;

  // Make a fetch request to the API
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

//Function to display music events, is called by 
function createMusicEventsList(event){
    
    let eventsRow = document.querySelector('#events');
    eventsRow.classList.add('row');
    // Loop to display max 10 invents from a list or any available events
    // Loop dynamiclly creates all the available events
    if (event.length > 0) {
    for (let i = 0; i < Math.min(10,event.length); i++){

        let eventContainer = document.createElement('div');
        eventContainer.classList.add('col-2', 'm-2');
        let eventDateEl = document.createElement('p');
        let eventVenueEl = document.createElement('p');
        let eventCountryEl = document.createElement('p');

        let eventStartDate = event[i].startDate;
        let eventVenue = event[i].location.name;
        let eventCountry = event[i].location.address.addressCountry.name;

        eventDateEl.textContent = `Date of the Event: ${eventStartDate}`;
        eventVenueEl.textContent = `Venue: ${eventVenue}`;
        eventCountryEl.textContent = `Country: ${eventCountry}`;
        
        eventContainer.append(eventDateEl, eventVenueEl, eventCountryEl);
        eventsRow.append(eventContainer);
    // If there is no events, message is displayed.
    }} else {
        let noEventsText = 'No Events Available At The Time Of This Search.';
        let noEventsTextEl = document.createElement('p');
        noEventsTextEl.textContent = noEventsText;
        eventsRow.append(noEventsTextEl);
    }
}

// Click event to start the function
$('.btn-primary').on('click', getRandomArtist);

// Search history button, clear button and pop-up
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
  const searchHistoryList = document.getElementById('searchHistoryList');

  searchHistoryList.innerHTML = '';

  searchHistory.forEach(entry => {
      const listItem = document.createElement('li');
      listItem.textContent = entry;
      searchHistoryList.appendChild(listItem);
  });

  document.getElementById('searchHistoryPopup').style.display = 'block';
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
  document.getElementById('searchHistoryPopup').style.display = 'none';
}

// Function to retrieve and log the selected genre into local storage
function submitGenre() {
  const selectedGenre = document.getElementById('dropdownInput').value;
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
