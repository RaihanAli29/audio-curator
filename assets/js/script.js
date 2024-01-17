function setCurrentDay() {
    const currentDayStr = dayjs().format("dddd, MMMM DD");
    const currentDayEl = $("#currentDay");
    currentDayEl.text(currentDayStr);
};

setCurrentDay();