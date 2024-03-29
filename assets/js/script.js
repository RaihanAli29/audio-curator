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

// Function to get a random artist based on the selected genre and era
function getRandomArtist(event) {

  // event.preventDefault();
  // Get the selected genre from the dropdown
  let selectedGenre = $('#dropdownInput').val();

  if (selectedGenre === ''){
    return;
  }

  // Make a request to the MusicBrainz API to get a random artist based on the selected genre
  // Use the selected genre to construct the API request
  let apiUrl = `https://musicbrainz.org/ws/2/artist?query=tag:${selectedGenre}&fmt=json&limit=100`;
  
  // Make a fetch request to the API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Get a random artist from the response
        let randomArtist = data.artists[Math.floor(Math.random() * data.artists.length)];
        displayInfo(randomArtist);
          
      })
      .catch(error => {
          console.log('Error fetching data:', error);});
}

function displayInfo(data) {

  //Clear previous event display search
  document.querySelector('#artists').innerHTML = '';
  document.querySelector('#albums').innerHTML = '';
  
  // Display the random artist on the webpage
  displayRandomArtist(data.name);

  // Call the getTopTenAlbums function to fetch and display the top ten albums
  getTopTenAlbums(data.id);

  // Get upcoming events after displaying the random artist
  getUpcomingEvents(data.name);

  submitGenre(data.name)
}

// Function to display the random artist on the webpage
function displayRandomArtist(artist) {
  // Display the random artist's name in the results section
  let resultForm = $('#artists');

  // Create a header for the random artist
  let artistHeader = $('<h4>').text('Random Artist');

  // Create a paragraph to display the artist's name
  let artistParagraph = $('<p>').html(`<strong>${artist}</strong>`);

  // Append the header and artist paragraph to the resultForm
  resultForm.html(artistHeader);
  resultForm.append(artistParagraph);
}

// Function to fetch and display the top ten albums of the random artist
function getTopTenAlbums(artistId) {
  const apiUrl = `https://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=10`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Get the top ten albums from the response
          let topTenAlbums = data.releases.slice(0, 10);
          console.log(data)
          // Display the top ten albums on the webpage
          displayTopTenAlbums(topTenAlbums);
      })
      .catch(error => {
          console.log('Error fetching album data:', error);
      });
}

// Function to filter out duplicate album names
function filterDuplicateAlbums(albums) {
  // Use a Set to keep track of unique album names
  const uniqueAlbums = new Set();

  // Use filter to create a new array with unique albums
  const filteredAlbums = albums.filter(album => {
      // Convert album title to lowercase for case-insensitive comparison
      const albumName = album.title.toLowerCase();

      // Check if the album name is not in the set (not a duplicate)
      if (!uniqueAlbums.has(albumName)) {
          // Add the album name to the set
          uniqueAlbums.add(albumName);

          // Return true to keep the album in the filtered array
          return true;
      }

      // Return false to exclude duplicate albums
      return false;
  });

  return filteredAlbums;
}

// Function to display the top ten albums on the webpage
function displayTopTenAlbums(albums) {
  // Filter out duplicate album names
  const uniqueAlbums = filterDuplicateAlbums(albums);

  // Display the top ten albums in the results section
  let resultForm = $('#albums');
  
  // Create a header for the top albums
  let albumsHeader = $('<h4>').text('Top Ten Albums');
  
  // Create an unordered list to list the albums
  let albumList = $('<ul>');
  
  // Populate the list with albums
  uniqueAlbums.forEach(album => {
      let albumListItem = $('<li>').text(album.title);
      albumList.append(albumListItem);
  });
  
  // Append the header and album list to the resultForm
  resultForm.append(albumsHeader, albumList);
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

//Function to display music events, is called by 
function createMusicEventsList(event){
    
  let eventsRow = document.querySelector('#events');
  eventsRow.classList.add('row');

  document.querySelector('#events').innerHTML = '';

  // Loop to display max 10 invents from a list or any available events
  // Loop dynamiclly creates all the available events
  if (event.length > 0) {
  // Create a header for the events
  let eventsHeader = document.createElement('h4');
  eventsHeader.textContent = 'Upcoming Events';
  eventsRow.append(eventsHeader);

  for (let i = 0; i < Math.min(9, event.length); i++){

      let eventContainer = document.createElement('div');
      eventContainer.classList.add('col-3', 'm-1', 'event-container');
      // Add a unique identifier to each event container
      eventContainer.setAttribute('data-event-id', i);

      let eventDateEl = document.createElement('p');
      let eventVenueEl = document.createElement('p');
      let eventCountryEl = document.createElement('p');

      let eventStartDate = event[i].startDate;
      let eventVenue = event[i].location.name;
      let eventCountry = event[i].location.address.addressCountry.name;
      // This variable is using day.js API to display date in a new format
      let eventsDate = (dayjs(eventStartDate).format('MM-DD-YYYY'));

      eventDateEl.textContent = `Event Date: ${eventsDate}`;
      eventVenueEl.textContent = `Venue: ${eventVenue}`;
      eventCountryEl.textContent = `Country: ${eventCountry}`;
      
      eventContainer.append(eventDateEl, eventVenueEl, eventCountryEl);
      eventsRow.append(eventContainer);
  // If there is no events, message is displayed.
  }} else {
      let noEventsText = 'No Events Available.';
      let noEventsTextEl = document.createElement('p');
      noEventsTextEl.textContent = noEventsText;
      eventsRow.append(noEventsTextEl);
  }
}

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
      let listItem = document.createElement('button');
      listItem.classList.add('btn','btn-outline-secondary','col-6')
      listItem.addEventListener('click', searchHistoryArtist);
      listItem.textContent = `${entry.savedArtist} - ${entry.savedGenre}`;
      listItem.dataset.artist = entry.savedArtist;
      searchHistoryList.appendChild(listItem);
  });

  document.getElementById('searchHistoryPopup').style.display = 'block';
}

function searchHistoryArtist(event){
  event.preventDefault();
  let artistNameText = event.target.dataset.artist;
  //Clear previous event display search
  document.querySelector('#artists').innerHTML = '';
  document.querySelector('#albums').innerHTML = '';
  // Display the random artist on the webpage
  displayRandomArtist(artistNameText);

  // Call the getTopTenAlbums function to fetch and display the top ten albums
  let apiUrl = `https://musicbrainz.org/ws/2/artist/?query=artist:${artistNameText}&fmt=json`;
  // Make a fetch request to the API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Get a random artist from the response
        console.log(data)
        getTopTenAlbums(data.artists[0].id);
      })
      .catch(error => {
          console.log('Error fetching data:', error);});

  // Get upcoming events after displaying the random artist
  getUpcomingEvents(artistNameText);

  closeSearchHistoryPopup();
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
function submitGenre(artist) {
  let selectedGenre = document.getElementById('dropdownInput').value;
  let selectedArtist = artist
  if (selectedGenre) {
      // Retrieve existing search history from local storage
      let searchHistory = getSearchHistory();
      let searchHistoryObj = {
        savedArtist: selectedArtist,
        savedGenre: selectedGenre,
      };
      // Add the selected genre to the search history
      searchHistory.push(searchHistoryObj);

    // Save the updated search history to local storage
    saveSearchHistory(searchHistory);

  }
}

// Click event to start the function
$('#submit-btn').on('click', getRandomArtist);

$('#dropdownInput').on('keypress', function(event) {
  if (event.which === 13) {
      getRandomArtist();
  }
});