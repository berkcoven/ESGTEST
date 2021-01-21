const app = require('../../js/utils/app.core');

app.createArc({
  container: '#menu-rate-08-1',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 8
  }
});

app.createArc({
  container: '#menu-rate-08-2',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 8
  }
});

app.createArc({
  container: '#menu-rate-16-1',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 8.7
  }
});

app.createArc({
  container: '#menu-rate-25-1',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 6.5
  }
});

app.createArc({
  container: '#menu-rate-05-1',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 9.2
  }
});

app.createArc({
  container: '#menu-rate-10-1',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 7.2
  }
});

app.createArc({
  container: '#menu-rate-31-1',
  width: 64,
  height: 64,
  lineWidth: 6,
  gradient: {
    colors: ['#5216fd', '#ff055d']
  },
  scale: {
    start: 0,
    end: 10,
    stop: 4.2
  }
});

app.createSlider({
  sliderContainer: '#ns-news-slider',
  itemsContainer: '.news-section-categories',
  rosterContainer: '.news-section-options',
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'vertical',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000
  }
});

app.createSlider({
  sliderContainer: '#menu-gr-slider1',
  itemsContainer: '.news-section-items',
  rosterContainer: false,
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000,
    slideGap: 30,
    slideCount: 3
  },
  controls: {
    container: '#menu-gr-controls'
  }
});

app.createSlider({
  sliderContainer: '#menu-gn-slider1',
  itemsContainer: '.news-section-items',
  rosterContainer: false,
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000,
    slideGap: 30,
    slideCount: 3
  },
  controls: {
    container: '#menu-gn-controls'
  }
});

app.createSlider({
  sliderContainer: '#menu-gkn-slider1',
  itemsContainer: '.news-section-items',
  rosterContainer: false,
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000,
    slideGap: 30,
    slideCount: 3
  },
  controls: {
    container: '#menu-gkn-controls'
  }
});

app.createSlider({
  sliderContainer: '#menu-mn-slider1',
  itemsContainer: '.news-section-items',
  rosterContainer: false,
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000,
    slideGap: 30,
    slideCount: 3
  },
  controls: {
    container: '#menu-mn-controls'
  }
});

app.createSlider({
  sliderContainer: '#menu-esn-slider1',
  itemsContainer: '.news-section-items',
  rosterContainer: false,
  autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000,
    slideGap: 30,
    slideCount: 3
  },
  controls: {
    container: '#menu-esn-controls'
  }
});

app.createSlider({
  sliderContainer: '#submenu-slider-1',
  itemsContainer: '.submenu-slider-items',
  rosterContainer: '.submenu-slider-options',
  rosterControls: {
    triggerEvent: 'mouseover'
  },
  autoSlide: false,
  lock: false,
  animation: {
    type: 'static',
    orientation: 'vertical',
    transition: 'direct',
    slideDelay: 7000,
    slideTransition: 1000
  }
});

app.createProgressBar({
  container: '#mn-pg-1',
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
  container: '#mn-pg-1',
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
  container: '#mn-pg-2',
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
  container: '#mn-pg-2',
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
  container: '#mn-pg-3',
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
  container: '#mn-pg-3',
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