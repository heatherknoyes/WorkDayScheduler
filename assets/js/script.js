var currentDayEl = $("#currentDay");

function setToday() {
  var now = moment().local().format("dddd, MMMM Do");
  currentDayEl.addClass("time-block");
  currentDayEl.text(now);
}

function createCalendar() {}

function init() {
  setToday();
  createCalendar();
}

init();
