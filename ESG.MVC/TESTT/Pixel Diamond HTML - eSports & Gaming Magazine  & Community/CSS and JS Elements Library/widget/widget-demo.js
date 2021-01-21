const app = require('../../js/utils/app.core');

app.createDropdown({
  dropdownSelector: '#rounds-dropdown',
  dropdownHandler: '#rounds-dropdown-trigger',
  offset: {
    top: 34,
    left: 0
  },
  selectable: true,
  options: {
    container: '.dp-option',
    current: '#rounds-dropdown-option-value'
  }
});

app.createSlider({
  sliderContainer: '#w-award-sl',
  itemsContainer: '.widget-slider-items',
  rosterContainer: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000
  },
  controls: {
    container: '#w-award-sl-controls',
    disabledClass: 'disabled'
  }
});

app.createSlider({
  sliderContainer: '#cmr-slider',
  itemsContainer: '.carousel-match-result-items',
  rosterContainer: false,
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000
  },
  controls: {
    container: '#crm-controls',
    disabledClass: 'disabled'
  },
  stopAtEnd: true
});

app.createSlider({
  sliderContainer: '#cmrf-slider',
  itemsContainer: '.carousel-match-result-items',
  rosterContainer: false,
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000
  },
  controls: {
    container: '#crmf-controls',
    disabledClass: 'disabled'
  },
  stopAtEnd: true
});

app.createDropdown({
  dropdownSelector: '#match-selector-dropdown',
  dropdownHandler: '#match-selector-dropdown-trigger',
  offset: {
    top: 34,
    left: -10
  },
  selectable: true,
  options: {
    container: '.dp-option',
    current: '#match-selector-dropdown-option-value'
  }
});

/**
 * Countdown auto - restart
 */
const now = new Date(),
      today = {
        day: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear()
      };

/**
 * Countdowns
 */
app.createProgressBar({
  width: 140,
  container: '#match-cd-01-pgb'
});

const pg1 = app.createProgressBar({
  width: 140,
  container: '#match-cd-01-pgb',
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  controlAnimation: true
});

if (pg1) {
  app.createCountdown({
    container: '#match-cd-01-text',
    startDate: new Date(today.year, today.month - 1, today.day),
    targetDate: new Date(today.year, today.month, today.day + 13),
    textOnly: true,
    onStep: pg1.render
  });
}

app.createProgressBar({
  container: '#t-pgb-1',
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
  container: '#t-pgb-1',
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
  container: '#t-pgb-2',
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
  container: '#t-pgb-2',
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
  container: '#t-pgb-3',
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
  container: '#t-pgb-3',
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

app.createProgressBar({
  container: '#t-pgb-4',
  width: 812,
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
  buttEnd: true,
  breakpoints: {
    960: {
      width: 400,
      height: 6
    },
    480: {
      width: 210,
      height: 6
    }
  }
});

app.createProgressBar({
  container: '#t-pgb-4',
  width: 812,
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
  buttEnd: true,
  breakpoints: {
    960: {
      width: 400,
      height: 6
    },
    480: {
      width: 210,
      height: 6
    }
  }
});

app.createProgressBar({
  container: '#t-pgb-5',
  width: 812,
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
  buttEnd: true,
  breakpoints: {
    960: {
      width: 400,
      height: 6
    },
    480: {
      width: 210,
      height: 6
    }
  }
});

app.createProgressBar({
  container: '#t-pgb-5',
  width: 812,
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
  buttEnd: true,
  breakpoints: {
    960: {
      width: 400,
      height: 6
    },
    480: {
      width: 210,
      height: 6
    }
  }
});

app.createProgressBar({
  container: '#t-pgb-6',
  width: 812,
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
  buttEnd: true,
  breakpoints: {
    960: {
      width: 400,
      height: 6
    },
    480: {
      width: 210,
      height: 6
    }
  }
});

app.createProgressBar({
  container: '#t-pgb-6',
  width: 812,
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
  buttEnd: true,
  breakpoints: {
    960: {
      width: 400,
      height: 6
    },
    480: {
      width: 210,
      height: 6
    }
  }
});

app.createProgressBar({
  container: '#t-pgb-7',
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
  container: '#t-pgb-7',
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
  container: '#t-pgb-8',
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
  container: '#t-pgb-8',
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
  container: '#t-pgb-9',
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
  container: '#t-pgb-9',
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

app.createArc({
  container: '#t-arc-stat-1',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#t-arc-stat-1',
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
  container: '#t-arc-stat-2',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#t-arc-stat-2',
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
  container: '#t-arc-stat-3',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#t-arc-stat-3',
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

app.createArc({
  container: '#t-arc-stat-4',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#t-arc-stat-4',
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
  container: '#t-arc-stat-5',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#t-arc-stat-5',
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
  container: '#t-arc-stat-6',
  width: 46,
  height: 46,
  lineWidth: 6,
  lineColor: '#dee807',
  linkText: false
});

app.createArc({
  container: '#t-arc-stat-6',
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

app.createArc({
  container: '#t-tp-rate-01',
  width: 48,
  height: 48,
  lineWidth: 4,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#t-tp-rate-01',
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
    stop: 94
  },
  decimalPoints: 0,
  animateOnScroll: true
});

app.createArc({
  container: '#t-tp-rate-02',
  width: 48,
  height: 48,
  lineWidth: 4,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#t-tp-rate-02',
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
  container: '#w-arc-wr-1',
  width: 90,
  height: 90,
  lineWidth: 6,
  lineColor: '#ebebeb',
  linkText: false,
  topHalf: true
});

app.createArc({
  container: '#w-arc-wr-1',
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
  container: '#w-arc-mid-1',
  width: 90,
  height: 90,
  lineWidth: 6,
  lineColor: '#ebebeb',
  linkText: false,
  topHalf: true
});

app.createArc({
  container: '#w-arc-mid-1',
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

app.createArc({
  container: '#w-arc-rate-01',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#w-arc-rate-01',
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

app.createProgressBar({
  container: '#ew3-pgb-large-01',
  width: 268,
  height: 20,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-large-01',
  width: 268,
  height: 20,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 100,
    stop: 79.03
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 34,
    gap: 4,
    color: '#fff'
  },
  animateOnScroll: true,
  decimalPoints: 2,
  linkText: true,
  linkTo: '#ew3-pgb-large-01-text'
});

app.createArc({
  container: '#w-arc-rate-02',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#w-arc-rate-02',
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
    stop: 5
  },
  animateOnScroll: true,
  linkText: false
});

app.createProgressBar({
  container: '#ew3-pgb-large-02',
  width: 268,
  height: 20,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-large-02',
  width: 268,
  height: 20,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 100,
    stop: 90
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 34,
    gap: 4,
    color: '#fff'
  },
  animateOnScroll: true,
  decimalPoints: 2,
  linkText: true,
  linkTo: '#ew3-pgb-large-02-text'
});

app.createArc({
  container: '#w-arc-rate-03',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#w-arc-rate-03',
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

app.createProgressBar({
  container: '#ew3-pgb-large-03',
  width: 268,
  height: 20,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-large-03',
  width: 268,
  height: 20,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 100,
    stop: 36.57
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 34,
    gap: 4,
    color: '#fff'
  },
  animateOnScroll: true,
  decimalPoints: 2,
  linkText: true,
  linkTo: '#ew3-pgb-large-03-text'
});

app.createArc({
  container: '#w-arc-rate-04',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#w-arc-rate-04',
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

app.createProgressBar({
  container: '#ew3-pgb-large-04',
  width: 268,
  height: 20,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-large-04',
  width: 268,
  height: 20,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 100,
    stop: 52.04
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 34,
    gap: 4,
    color: '#fff'
  },
  animateOnScroll: true,
  decimalPoints: 2,
  linkText: true,
  linkTo: '#ew3-pgb-large-04-text'
});

app.createProgressBar({
  container: '#ew3-pgb-os-01',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-01',
  width: 88,
  height: 6,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 24,
    stop: 22
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: 'HOURS'
});

app.createProgressBar({
  container: '#ew3-pgb-os-02',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-02',
  width: 88,
  height: 6,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 15,
    stop: 7.729
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 3
});

app.createProgressBar({
  container: '#ew3-pgb-os-03',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-03',
  width: 88,
  height: 6,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 10,
    stop: 3.5
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-04',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-04',
  width: 88,
  height: 6,
  lineCap: 'butt',
  scale: {
    start: 0,
    end: 100,
    stop: 48
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true
});

app.createProgressBar({
  container: '#ew3-pgb-os-05',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-05',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 40,
    stop: 25
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-06',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-06',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 25,
    stop: 10
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-07',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-07',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 1000,
    stop: 760.23
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-08',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-08',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 40,
    stop: 15.765
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 3
});

app.createProgressBar({
  container: '#ew3-pgb-os-09',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-09',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 3.860,
    stop: 3.860
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 3
});

app.createProgressBar({
  container: '#ew3-pgb-os-10',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-10',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 8
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-11',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-11',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 36
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true
});

app.createProgressBar({
  container: '#ew3-pgb-os-12',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-12',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 2
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  decimalPoints: 1
});

app.createProgressBar({
  container: '#ew3-pgb-os-13',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-13',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 60
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true
});

app.createProgressBar({
  container: '#ew3-pgb-os-14',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-14',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 7,
    stop: 7
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-15',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-15',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 63,
    stop: 11
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 1
});

app.createProgressBar({
  container: '#ew3-pgb-os-16',
  width: 88,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-16',
  width: 88,
  height: 6,
  lineCap: 'butt',
  gradient: {
    colors: ['#1c95f3', '#18c1ff']
  },
  scale: {
    start: 0,
    end: 7,
    stop: 7
  },
  split: {
    parts: 15,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-17',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-17',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#713fcb', '#00e3d0']
  },
  scale: {
    start: 0,
    end: 24,
    stop: 9
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: 'HOURS'
});

app.createProgressBar({
  container: '#ew3-pgb-os-18',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-18',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#713fcb', '#00e3d0']
  },
  scale: {
    start: 0,
    end: 20,
    stop: 17.764
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 3
});

app.createProgressBar({
  container: '#ew3-pgb-os-19',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-19',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#713fcb', '#00e3d0']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 18.04
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-20',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-20',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 6.076,
    stop: 6.076
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 3
});

app.createProgressBar({
  container: '#ew3-pgb-os-21',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-21',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 8.5
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-22',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-22',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 1000,
    stop: 465.23
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-23',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-23',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 33.25,
    stop: 15.662
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 3
});

app.createProgressBar({
  container: '#ew3-pgb-os-24',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-24',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 63.33
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-25',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-25',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 13.50
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-26',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-26',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 10
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true
});

app.createProgressBar({
  container: '#ew3-pgb-os-27',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-27',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 100,
    stop: 68
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true
});

app.createProgressBar({
  container: '#ew3-pgb-os-28',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-28',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 23,
    stop: 10
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false
});

app.createProgressBar({
  container: '#ew3-pgb-os-29',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-29',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 23,
    stop: 23
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-30',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-30',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 33.5,
    stop: 33.5
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-os-31',
  width: 76,
  height: 6,
  lineCap: 'butt'
});

app.createProgressBar({
  container: '#ew3-pgb-os-31',
  width: 76,
  height: 6,
  lineCap: 'butt',
  gradient:{
    colors: ['#00e3d0', '#62fff2']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 10
  },
  split: {
    parts: 13,
    gap: 2,
    color: '#fff'
  },
  animateOnScroll: true,
  linkText: true,
  linkUnits: false,
  decimalPoints: 2
});

app.createProgressBar({
  container: '#ew3-pgb-tp-01',
  width: 270,
  height: 6
});

app.createProgressBar({
  container: '#ew3-pgb-tp-01',
  width: 270,
  height: 6,
  scale: {
    start: 0,
    end: 100,
    stop: 72
  },
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  split: {
    partItems: [
      {
        width: 30,
        gap: 4
      },
      {
        width: 40,
        gap: 4
      },
      {
        width: 50,
        gap: 4
      },
      {
        width: 60,
        gap: 4
      },
      {
        width: 74,
        gap: 4
      }
    ],
    color: '#fff'
  }
});

app.createTooltip({
  container: '.ew3-wtl-tooltip',
  direction: 'top',
  tooltipSelector: ['xm-tooltip', 'v2'],
  align: 'center',
  offset: 2,
  animation: {
    type: 'translate-out-fade'
  }
});

app.createArc({
  container: '#tov-arc-rate-01',
  width: 160,
  height: 160,
  lineWidth: 8,
  lineColor: '#ebebeb',
  linkText: false
});

app.createArc({
  container: '#tov-arc-rate-01',
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