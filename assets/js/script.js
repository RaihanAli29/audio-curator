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
          getUpcomingEvents();
      })
      .catch(error => {
          console.log('Error fetching data:', error);
      });
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
function getUpcomingEvents() {
  // Make a request to the MusicBrainz API to get upcoming events
  let apiUrl = `https://musicbrainz.org/ws/2/event?fmt=json&limit=10`;

  // Make a fetch request to the API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Display the upcoming events on the webpage
          displayUpcomingEvents(data.events);
      })
      .catch(error => {
          console.log('Error fetching upcoming events:', error);
      });
}

// Function to display the upcoming events on the webpage
function displayUpcomingEvents(events) {
  // Display the upcoming events in the results section
  let resultForm = $('.resultForm');
  let eventsList = '<p><strong>Upcoming Events:</strong></p><ul>';
  events.forEach(event => {
      eventsList += `<li>${event.name}</li>`;
  });
  eventsList += '</ul>';
  resultForm.append(eventsList);
}

// Event listener for the submit button
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