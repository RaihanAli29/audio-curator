// day.js function to display date and time at the top of the page
function setCurrentDay() {
    const currentDayStr = dayjs().format("dddd, MMMM DD");
    const currentDayEl = $("#currentDay");
    currentDayEl.text(currentDayStr);
};

setCurrentDay();

// function to display selected dropdown item using user input
$(document).ready(function() {
    $(".dropdown-item").click(function() {
      var selectedGenre = $(this).text();
      $("#dropdownInput").val(selectedGenre);
    });
  });