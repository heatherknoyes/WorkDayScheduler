var now = moment().local();
var calendarItems = [];
var startTime = 7;
var endTime = 22;

/* Defines the functions that load when the page is loaded */
function init() {
  setToday();
  createCalendar();
}

/* Writes the html for the calendar to display on the page */
function createCalendar() {
  for (var i = startTime; i <= endTime; i++) {
    var hour = moment(i, "H").format("hA");

    $(".container").append(`<div class="row">
        <div class="col-1 hour" id="hour${i}">${hour}</div>
        <input class="col-9 textArea event" id="time${i}"></input>
        <i class="fas fa-save col-1 saveBtn"></i>
        <i class="fa fa-trash col-1 deleteBtn"></i>
      </div>`);

    colorCalendarBlocks(i);
  }
  fillCalendarEvents();
}

/* Sets the current day at the top of the calendar */
function setToday() {
  var todDate = now.format("dddd, MMMM Do");
  $("#currentDay").addClass("time-block");
  $("#currentDay").text(todDate);
}

/* Fills the calendar with the applicable events that have been saved for that time span */
function fillCalendarEvents() {
  calendarItems = JSON.parse(localStorage.getItem("calendarItems"));
  if (calendarItems) {
    calendarItems.forEach(function (item) {
      var time = moment(item.hour, "hA").format("H");
      var idName = "#time" + time;
      $(idName).val(item.event);
    });
  }
}

/* Colors the time blocks based on the time of day */
function colorCalendarBlocks(i) {
  if (i === now.hour()) {
    $(`#time${i}`).addClass("present");
  } else if (i > now.hour()) {
    $(`#time${i}`).addClass("future");
  } else {
    $(`#time${i}`).addClass("past");
  }
}

function eventExists(calendarItems, dayEvent) {
  for (var i = 0; i < calendarItems.length; i++) {
    if (calendarItems[i].hour === dayEvent.hour) {
      i = calendarItems.length;
      return true;
    }
  }
  return false;
}

/* When the save button is clicked the item is saved to the local storage */
$(".container").on("click", ".saveBtn", function (event) {
  var target = $(event.currentTarget);
  var rowItem = target.parent();
  var dayEvent = {
    hour: rowItem.children(".hour").text(),
    event: rowItem.children(".event").val(),
  };

  // Checks to make sure the event is not null
  if (dayEvent.event !== "") {
    // Checks to make sure that calendarItems is not empty
    if (calendarItems.length !== 0) {
      calendarItems = JSON.parse(localStorage.getItem("calendarItems"));

      if (eventExists(calendarItems, dayEvent)) {
        for (var i = 0; i < calendarItems.length; i++) {
          if (calendarItems[i].hour === dayEvent.hour) {
            calendarItems[i] = dayEvent;
            i = calendarItems.length;
          }
        }
      } else {
        calendarItems.push(dayEvent);
      }
    } else {
      calendarItems.push(dayEvent);
    }

    localStorage.setItem("calendarItems", JSON.stringify(calendarItems));
  }
});

/* When the delete button is clicked the item is removed from the local storage */
$(".container").on("click", ".deleteBtn", function (event) {
  var target = $(event.currentTarget);
  var rowItem = target.parent();
  var dayEvent = {
    hour: rowItem.children(".hour").text(),
    event: rowItem.children(".event").val(),
  };

  // Checks to make sure that calendarItems is not empty
  if (calendarItems.length !== 0) {
    calendarItems = JSON.parse(localStorage.getItem("calendarItems"));

    if (eventExists(calendarItems, dayEvent)) {
      for (var i = 0; i < calendarItems.length; i++) {
        if (calendarItems[i].hour === dayEvent.hour) {
          calendarItems.splice(i, 1);
          rowItem.children(".event").val("");
          i = calendarItems.length;
        }
      }
    }
  }

  localStorage.setItem("calendarItems", JSON.stringify(calendarItems));
});

init();
