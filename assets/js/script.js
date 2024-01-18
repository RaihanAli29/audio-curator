// day.js function to display date and time at the top of the page
function setCurrentDay() {
    const currentDayStr = dayjs().format("dddd, MMMM DD");
    const currentDayEl = $("#currentDay");
    currentDayEl.text(currentDayStr);
};

setCurrentDay();

// Function to get a random artist based on the selected genre and era
function getRandomArtist() {
  // Get the selected genre from the dropdown
  let selectedGenre = $('#dropdownInput').val();

  // Make a request to the MusicBrainz API to get a random artist based on the selected genre
  // Use the selected genre to construct the API request
  let apiUrl = `https://musicbrainz.org/ws/2/artist?query=tag:${selectedGenre}&fmt=json&limit=100`;

  // Make a fetch request to the API
  $.getJSON(apiUrl, function(data) {
      // Get a random artist from the response
      let randomArtist = data.artists[Math.floor(Math.random() * data.artists.length)];

      // Display the random artist on the webpage
      displayRandomArtist(randomArtist);
  }).fail(function(error) {
      console.log('Error fetching data:', error);
  });
}

// Function to display the random artist on the webpage
function displayRandomArtist(artist) {
  // Display the random artist's name in the results section
  let resultForm = $('.resultForm');
  resultForm.html(`<p><strong>Random Artist:</strong> ${artist.name}</p>`);

  // Call the getTopTenAlbums function to fetch and display the top ten albums
  getTopTenAlbums(artist.id);
}

// Function to get the top ten albums of the random artist
function getTopTenAlbums(artistId) {
  // Make a request to the MusicBrainz API to get the albums of the selected artist
  let apiUrl = `https://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=10`;

  // Make a fetch request to the API
  $.getJSON(apiUrl, function(data) {
      // Get the top ten albums from the response
      let topTenAlbums = data.releases.slice(0, 10);

      // Display the top ten albums on the webpage
      displayTopTenAlbums(topTenAlbums);
  }).fail(function(error) {
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

// Function to get the upcoming events for the artist
function getUpcomingEvents(artistName) {
  // Make a request to the separate events API to get the upcoming events for the artist
  let eventsApiUrl = `https://events-api.com/upcoming-events?artist=${artistName}`;

  // Make a fetch request to the events API
  $.getJSON(eventsApiUrl, function(data) {
      // Get the upcoming events from the response
      let upcomingEvents = data.events;

      // Display the upcoming events on the webpage
      displayUpcomingEvents(upcomingEvents);
  }).fail(function(error) {
      console.log('Error fetching upcoming events:', error);
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

// Event listener for the submit button
$('.btn-primary').on('click', getRandomArtist);
