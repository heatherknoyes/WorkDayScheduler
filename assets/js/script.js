var currentDayEl = $("#currentDay");
var calendarEl = $(".container");
var now = moment().local();
var startTime = 9;
var endTime = 17;

function createCalendar() {
  for (var i = startTime; i <= endTime; i++) {
    var hour = moment(i, "H").format("hA");

    calendarEl.append(`<div class="row">
        <div class="col-1 hour">${hour}</div>
        <input class="col-10 textArea" id="time${i}"></input>
        <i class="fas fa-save col-1 saveBtn"></i>
      </div>`);

    colorCalendarBlocks(i);
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

function colorCalendarBlocks(i) {
  if (i === now.hour()) {
    $(`#time${i}`).addClass("present");
  } else if (i > now.hour()) {
    $(`#time${i}`).addClass("future");
  } else {
    $(`#time${i}`).addClass("past");
  }
}

init();
