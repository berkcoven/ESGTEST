const app = require('../../js/utils/app.core');
const currentYear = (new Date()).getFullYear(),
      currentMonth = (new Date()).getMonth();

window.cal = app.createCalendar({
  container: '#calendar1',
  events: {
    [new Date(currentYear, currentMonth, 14)]: [
      {
        name: 'Funtendo Online Event',
        info: 'some event info',
        type: 'blue'
      },
      {
        name: 'Fighter X Release!',
        info: 'some other event info',
        type: 'green'
      }
    ],
    [new Date(currentYear, currentMonth, 26)]: [
      {
        name: 'League of Heroes Semifinals',
        info: 'some event info',
        type: 'violet'
      }
    ],
    [new Date(currentYear, currentMonth-1, 30)]: [
      {
        name: 'League of Heroes Semifinals',
        info: 'some event info',
        type: 'violet'
      }
    ]
  },
  linksTo: 'calendar.html',
  // displayDate: {
    // year: 2016,
    // month: 2
  // }
});

window.cal2 = app.createCalendar({
  container: '#calendar2',
  events: {
    [new Date(currentYear, currentMonth, 14)]: [
      {
        name: 'Funtendo Online Event',
        info: 'some event info',
        type: 'blue'
      },
      {
        name: 'Fighter X Release!',
        info: 'some other event info',
        type: 'green'
      }
    ],
    [new Date(currentYear, currentMonth-1, 28)]: [
      {
        name: 'League of Heroes Semifinals',
        info: 'some event info',
        type: 'violet'
      }
    ]
  },
  linksTo: 'calendar.html',
  lang: {
    abbr: true
  },
  showEventsOnHover: true
});