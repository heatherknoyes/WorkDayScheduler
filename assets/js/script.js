var currentDayEl = $("#currentDay");
var calendarEl = $(".container");
var now = moment().local();
var startTime = 9;
var endTime = 17;

function createCalendar() {
  for (var i = startTime; i <= endTime; i++) {
    var tod = i + "AM";

    if (i > 12) {
      tod = i - 12 + "PM";
    } else if (i === 12) {
      tod = 12 + "PM";
    }

    calendarEl.append(`<div class="row">
        <div class="col-1 hour">${tod}</div>
        <div class="col-10" id="time${i}"></div>
        <i class="fas fa-save col-1 saveBtn"></i>
      </div>`);

    colorCalendarBlocks();
  }
}

function init() {
  setToday();
  createCalendar();
}

function setToday() {
  var topDate = now.format("dddd, MMMM Do");
  currentDayEl.addClass("time-block");
  currentDayEl.text(topDate);
}

function colorCalendarBlocks() {
  if (i === now.hour()) {
    $(`#time${i}`).addClass("present");
  } else if (i > now.hour()) {
    $(`#time${i}`).addClass("future");
  } else {
    $(`#time${i}`).addClass("past");
  }
}

init();
