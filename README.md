# Work Day Scheduler

## Description

The motivation for this project was to create a calendar that the user can edit and see the current time of day along with events that they have saved. By using jQuery, external APIs, HTML, CSS, and JavaScript I was able to create a dynamic one screen calendar that the user can interact with. I learned how to utilize dynamic HTML elements with jQuery and Javascript and used the users local storage in order to save and delete events without the defaulting the text of the screen for a single instance. The thing I am most proud of with this project is that I was able to implement a delete button to make the UI more user friendly even though it wasn't a part of the requirements. With the completion of this project I fulfilled the following minimum user acceptance criteria.

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

This project taught me how to utilize jQuery instead of vanilla JavaScript as well as other APIs like Moment.js in order to manipulate time. In the future, I would like to try to put a dynamic section where the user is able to input what their times for their calendar should be. I would add a submit button as the trigger for a new calendar creation and would try to keep the same events that had already been saved. I also want to try to be able to incorporate a click off functionality so that the event clears out unless you hit the save button.

## Installation

1. Download all files within the main directory as well as the assets directory to your device.

2. Open the index.html file in your browser to view the website.

3. If future edits need to be made then the stylesheet can be found under ./assets/css/style.css. The JavaScript can be found under the ./assets/js/script.js.

## Usage

The following image shows the web application's appearance in a gif:

![The calendar webpage functionality in a GIF.](./assets/images/QuizGIF.gif)

You can view the deployed application here: https://heatherknoyes.github.io/WorkDayScheduler/

## License

No license.
