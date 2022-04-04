var currentDayEl = $("#currentDay");
var calendarEl = $(".container");
var saveBtn = $(".saveBtn");
var lineItemEl = $(".lineItem");
var now = moment().local();
var calendarItems = [];
var startTime = 9;
var endTime = 17;

function createCalendar() {
  for (var i = startTime; i <= endTime; i++) {
    var hour = moment(i, "H").format("hA");

    calendarEl.append(`<div class="row lineItem">
        <div class="col-1 hour">${hour}</div>
        <input class="col-10 textArea event" id="time${i}"></input>
        <i class="fas fa-save col-1 saveBtn"></i>
      </div>`);

    colorCalendarBlocks(i);
  }
  fillCalendarEvents();
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

function fillCalendarEvents() {
  var calendarItems = localStorage.getItem("calendarItems");
  if (calendarItems) {
    var calendarItemsArray = JSON.parse(calendarItems);

    console.log(calendarItemsArray);
  }
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

lineItemEl.on("focus", function (event) {
  var target = event.target;
});

$(".container").on("click", ".saveBtn", function (event) {
  var target = $(event.currentTarget);
  var rowItem = target.parent();
  var dayEvent = {
    hour: rowItem.children(".hour").text(),
    event: rowItem.children(".event").val(),
  };

  calendarItems.push(dayEvent);
  console.log(calendarItems);

  localStorage.setItem("calendarItems", JSON.stringify(calendarItems));
});

init();
