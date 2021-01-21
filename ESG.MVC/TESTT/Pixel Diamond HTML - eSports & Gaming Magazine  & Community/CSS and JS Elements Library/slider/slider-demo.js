const app = require('../../js/utils/app.core');

app.createSlider({
  sliderContainer: '#sliderb',
  rosterContainer: '.banner-slider-roster',
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 5000,
    slideTransition: 1000
  }
});

app.createSlider({
  sliderContainer: '#slider1',
  // reverse: true,
  // autoSlide: false,
  animation: {
    type: 'carousel',
    orientation: 'vertical',
    transition: 'direct',
    slideDelay: 5000,
    slideTransition: 700
  },
  controls: {
    container: '#slider1-controls'
  }
});

app.createSlider({
  sliderContainer: '#slider2',
  itemsContainer: '.carousel-items',
  rosterContainer: false,
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
    container: '#slider2-controls'
  },
  breakpoints: {
    960: {
      slideCount: 2
    },
    680: {
      slideCount: 1
    }
  }
});

app.createSlider({
  sliderContainer: '#sliderb2',
  rosterContainer: '.banner-slider-preview-roster',
  // reverse: true,
  // autoSlide: false,
  controls: {
    container: '#sliderb2-controls'
  },
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 6000,
    slideTransition: 1000
  }
});

app.createSlider({
  sliderContainer: '#sliderb2-1',
  itemsContainer: '.banner-slider-preview-roster',
  rosterContainer: false,
  slideOnClick: true,
  loop: true,
  loopOffset: 1,
  // reverse: true,
  // autoSlide: false,
  controls: {
    container: '#sliderb2-controls'
  },
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    slideDelay: 6000,
    slideTransition: 1000,
    slideGap: 146
  }
});

app.createSlider({
  sliderContainer: '#sliderb3',
  rosterContainer: false,
  // reverse: true,
  // autoSlide: false,
  controls: {
    container: '#sliderb3-controls'
  },
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 8000,
    slideTransition: 1000,
    slideCount: 1
  }
});

app.createSlider({
  sliderContainer: '#slr-slideshow1',
  rosterContainer: false,
  // reverse: true,
  // autoSlide: false,
  controls: {
    container: '#slr-slideshow1-controls'
  },
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 8000,
    slideTransition: 1000
  }
});

app.createSlider({
  sliderContainer: '#slr-slideshow1-1',
  itemsContainer: '.slider-roster',
  rosterContainer: false,
  // reverse: true,
  // autoSlide: false,
  controls: {
    container: '#slr-slideshow1-controls'
  },
  animation: {
    type: 'fade',
    orientation: 'horizontal',
    slideDelay: 8000,
    slideTransition: 1000
  }
});

app.createSlider({
  sliderContainer: '#slr-slideshow2',
  // reverse: true,
  // autoSlide: false,
  controls: {
    container: '#slr-slideshow2-controls'
  },
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 8000,
    slideTransition: 1000
  }
});