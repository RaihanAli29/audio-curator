
// events API to be inbeded after the event call
function getUpcomingEvent(artist) {

    const musicUrlEvents =  `https://www.jambase.com/jb-api/v1/events?artistName=${artist}&apikey=eaaa6772-d2ca-4b1b-8a89-5564b5d71967`;

    fetch(musicUrlEvents)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
    console.log(data);

    createMusicEventsList(data);
})}
 
getUpcomingEvent('coldplay');
// console.log(getMusicEventslist());
// function for creating a event row and by called by event API fetch

function createMusicEventsList (event){

    let eventsRow = document.querySelector('#events');
    eventsRow.classList.add('row');

    for (let i = 0; i < 10; i++){

        let eventContainer = document.createElement('div');
        eventContainer.classList.add('col-2', 'm-2', 'border', 'border-secondary-subtle');
        let eventDateEl = document.createElement('h4');
        let eventVenueEl = document.createElement('p');
        let eventCountryEl = document.createElement('p');

        let eventStartDate = event[i].startDate;
        let eventType = event[i].type;
        let eventMode = event[i].eventAttendanceMode;
        let eventVenue = event[i].location.name;
        let eventCountry = event[i].location.addressCountry.name;

        eventDateEl.textContent = `Date of the Event: ${eventStartDate}`;
        eventVenueEl.textContent = `Venue: ${eventVenue} (Type: ${eventType} Mode: ${eventMode}`;
        eventCountryEl.textContent = `Country: ${eventCountry}`;

        eventContainer.append(eventDateEl, eventVenueEl, eventCountryEl);
        eventsRow.append(eventContainer);
        }
}