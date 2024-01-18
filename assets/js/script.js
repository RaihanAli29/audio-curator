// https://musicbrainz.org/ws/2/artist?query=tab:pop&fmt=json&limit:100

let artistsArr = []; // link to working url to grab a list of artists or push them to the array

function getRandomArtist () {

    let randomArtist = Math.floor(Math.random() * artistsArr.length);
    return randomArtist;
}



// events API to be inbeded after the event call
function getMusicEventslist (artist) {

    const musicUrlEvents =  `https://www.jambase.com/jb-api/v1/events?artistName=${artist}&apikey=eaaa6772-d2ca-4b1b-8a89-5564b5d71967`;

    fetch(musicUrlEvents)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
    console.log(data);

    createMusicEventsList();
})}
 
getMusicEventslist('metallica');
// console.log(getMusicEventslist());
// function for creating a event row and by called by event API fetch

function createMusicEventsList (){

}