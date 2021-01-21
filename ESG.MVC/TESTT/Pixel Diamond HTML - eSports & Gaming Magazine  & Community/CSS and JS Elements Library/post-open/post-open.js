const app = require('../../js/utils/app.core');

app.createArc({
  container: '#post-open-rate1',
  width: 112,
  height: 112,
  lineWidth: 10,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 8.7
  }
});

app.createProgressBar({
  container: '#po-pg-1',
  width: 210,
  height: 6,
  lineColor: '#107df8',
  scale: {
    start: 0,
    end: 62,
    stop: 34
  },
  linkText: true,
  linkUnits: false,
  linkTo: '#tlw-kills-stat',
  buttEnd: true
});

app.createProgressBar({
  container: '#po-pg-1',
  width: 210,
  height: 6,
  lineColor: '#dee807',
  scale: {
    start: 0,
    end: 62,
    stop: 28
  },
  linkText: true,
  linkUnits: false,
  linkTo: '#rrh-kills-stat',
  reverse: true,
  buttEnd: true
});

app.createProgressBar({
  container: '#po-pg-2',
  width: 210,
  height: 6,
  lineColor: '#107df8',
  scale: {
    start: 0,
    end: 36,
    stop: 15
  },
  linkText: true,
  linkUnits: false,
  linkTo: '#tlw-deaths-stat',
  buttEnd: true
});

app.createProgressBar({
  container: '#po-pg-2',
  width: 210,
  height: 6,
  lineColor: '#dee807',
  scale: {
    start: 0,
    end: 36,
    stop: 21
  },
  linkText: true,
  linkUnits: false,
  linkTo: '#rrh-deaths-stat',
  reverse: true,
  buttEnd: true
});

app.createProgressBar({
  container: '#po-pg-3',
  width: 210,
  height: 6,
  lineColor: '#107df8',
  scale: {
    start: 0,
    end: 39,
    stop: 26
  },
  linkText: true,
  linkUnits: false,
  linkTo: '#tlw-assists-stat',
  buttEnd: true
});

app.createProgressBar({
  container: '#po-pg-3',
  width: 210,
  height: 6,
  lineColor: '#dee807',
  scale: {
    start: 0,
    end: 39,
    stop: 13
  },
  linkText: true,
  linkUnits: false,
  linkTo: '#rrh-assists-stat',
  reverse: true,
  buttEnd: true
});