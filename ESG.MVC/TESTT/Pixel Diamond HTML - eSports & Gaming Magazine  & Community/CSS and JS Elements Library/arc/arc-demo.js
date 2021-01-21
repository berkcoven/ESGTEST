const app = require('../../js/utils/app.core');

/**
 * Arc - Scores
 */
app.createArc({
  container: '#arc-big',
  width: 170,
  height: 170,
  lineWidth: 18,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  animateOnScroll: true,
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 8.7
  },
  shadow: true
});

app.createArc({
  container: '#arc-big-negative',
  width: 170,
  height: 170,
  lineWidth: 18,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  animateOnScroll: true,
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 8.7
  },
  shadow: true
});

app.createArc({
  container: '#arc-big-negative2',
  width: 170,
  height: 170,
  lineWidth: 18,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-big-negative2',
  width: 170,
  height: 170,
  lineWidth: 18,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  animateOnScroll: true,
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 8.7
  },
  shadow: true
});

app.createArc({
  container: '#arc-medium',
  width: 112,
  height: 112,
  lineWidth: 10,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  animateOnScroll: true,
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 8.7
  },
  shadow: true
});

app.createArc({
  container: '#arc',
  width: 90,
  height: 90,
  lineWidth: 8,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  animateOnScroll: true,
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 9.2
  },
  shadow: true
});

app.createArc({
  container: '#arc-small',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  animateOnScroll: true,
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 6.5
  },
  shadow: true
});

app.createArc({
  container: '#arc-tiny',
  width: 48,
  height: 48,
  lineWidth: 5,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  animateOnScroll: true,
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 8
  },
  shadow: true
});

/**
 * Arc - Stats
 */
app.createArc({
  container: '#arc-stats1',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#00d1f7',
  linkText: false
});

app.createArc({
  container: '#arc-stats1',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#f30a36',
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 3
  },
  linkText: false
});

app.createArc({
  container: '#arc-stats2',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#00d1f7',
  linkText: false
});

app.createArc({
  container: '#arc-stats2',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#f30a36',
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 7.5
  },
  linkText: false
});

app.createArc({
  container: '#arc-stats3',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#00d1f7',
  linkText: false
});

app.createArc({
  container: '#arc-stats3',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#f30a36',
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 4.5
  },
  linkText: false
});

app.createArc({
  container: '#arc-stats4',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#arc-stats4',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#107df8',
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 4.5
  },
  linkText: false
});

app.createArc({
  container: '#arc-stats5',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#arc-stats5',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#107df8',
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 6.5
  },
  linkText: false
});

app.createArc({
  container: '#arc-stats6',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#arc-stats6',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#107df8',
  speed: 50,
  scale: {
    start: 0,
    end: 10,
    stop: 2.5
  },
  linkText: false
});

/**
 * Arc - Rates
 */
app.createArc({
  container: '#arc-rate1',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-rate1',
  width: 160,
  height: 160,
  lineWidth: 8,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 50,
  scale: {
    start: 0,
    end: 100,
    stop: 84
  },
  decimalPoints: 0,
  linkUnits: '%',
  animateOnScroll: true
});

app.createArc({
  container: '#arc-rate2',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-rate2',
  width: 160,
  height: 160,
  lineWidth: 8,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 50,
  scale: {
    start: 0,
    end: 100,
    stop: 84
  },
  decimalPoints: 0,
  linkUnits: '%',
  animateOnScroll: true
});

app.createArc({
  container: '#arc-rate-tiny',
  width: 48,
  height: 48,
  lineWidth: 4,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-rate-tiny',
  width: 48,
  height: 48,
  lineWidth: 4,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 50,
  scale: {
    start: 0,
    end: 100,
    stop: 78.43
  },
  decimalPoints: 2,
  animateOnScroll: true
});

app.createArc({
  container: '#arc-rate3',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-rate3',
  width: 160,
  height: 160,
  lineWidth: 8,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 50,
  scale: {
    start: 0,
    end: 100,
    stop: 65
  },
  animateOnScroll: true,
  linkText: false
});

app.createArc({
  container: '#arc-rate4',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-rate4',
  width: 160,
  height: 160,
  lineWidth: 8,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 50,
  scale: {
    start: 0,
    end: 100,
    stop: 10
  },
  animateOnScroll: true,
  linkText: false
});

app.createArc({
  container: '#arc-rate5',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-rate5',
  width: 160,
  height: 160,
  lineWidth: 8,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 50,
  scale: {
    start: 0,
    end: 100,
    stop: 30
  },
  animateOnScroll: true,
  linkText: false
});

app.createArc({
  container: '#arc-rate6',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#arc-rate6',
  width: 160,
  height: 160,
  lineWidth: 8,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 50,
  scale: {
    start: 0,
    end: 100,
    stop: 25
  },
  animateOnScroll: true,
  linkText: false
});

app.createArc({
  container: '#arc-rate-half1',
  width: 90,
  height: 90,
  lineWidth: 6,
  lineColor: '#ebebeb',
  linkText: false,
  topHalf: true
});

app.createArc({
  container: '#arc-rate-half1',
  width: 90,
  height: 90,
  lineWidth: 6,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 25,
  scale: {
    start: 0,
    end: 100,
    stop: 59.9
  },
  animateOnScroll: true,
  linkUnits: '%',
  topHalf: true
});

app.createArc({
  container: '#arc-rate-half2',
  width: 90,
  height: 90,
  lineWidth: 6,
  lineColor: '#ebebeb',
  linkText: false,
  topHalf: true
});

app.createArc({
  container: '#arc-rate-half2',
  width: 90,
  height: 90,
  lineWidth: 6,
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  speed: 25,
  scale: {
    start: 0,
    end: 100,
    stop: 82.3
  },
  animateOnScroll: true,
  linkUnits: '%',
  topHalf: true
});