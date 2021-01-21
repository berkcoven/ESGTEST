const app = require('../../js/utils/app.core');

app.createSlider({
  sliderContainer: '#pp-slider-1',
  itemsContainer: '.product-preview-slider-items',
  rosterContainer: '.product-preview-slider-roster',
  autoSlide: true,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 5000,
    slideTransition: 800
  }
});

app.createSlider({
  sliderContainer: '#pp-slider-2',
  itemsContainer: '.product-preview-slider-items',
  rosterContainer: '.product-preview-slider-roster',
  autoSlide: true,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 5000,
    slideTransition: 800
  }
});

app.createSlider({
  sliderContainer: '#pp-slider-3',
  itemsContainer: '.product-preview-slider-items',
  rosterContainer: '.product-preview-slider-roster',
  autoSlide: true,
  animation: {
    type: 'carousel',
    orientation: 'horizontal',
    transition: 'direct',
    slideDelay: 5000,
    slideTransition: 800
  }
});

/**
 * COUNTERS
 */
const setupCounters = function (selector) {
  const counters = document.querySelectorAll(selector);

  for (let i = 0, len = counters.length; i < len; i++) {
    attachCounterEvents(counters[i]);
  }
};

const attachCounterEvents = function (el) {
  const substractControl = el.querySelector('.counter-control.substract'),
        addControl = el.querySelector('.counter-control.add');
  
  let addID, subID;

  const addUnit = function () {
    const counterValue = el.querySelector('.counter-value');
    counterValue.innerHTML = counterValue.innerHTML === '100' ? 100 : parseInt(counterValue.innerHTML) + 1;
    addID = setTimeout(addUnit, 300);
  };
  
  const substractUnit = function () {
    const counterValue = el.querySelector('.counter-value');
    counterValue.innerHTML = counterValue.innerHTML === '1' ? 1 : parseInt(counterValue.innerHTML) - 1;
    subID = setTimeout(substractUnit, 300);
  };

  const stopAdd = function () {
    clearTimeout(addID);
  };

  const stopSubstract = function () {
    clearTimeout(subID);
  };

  substractControl.addEventListener('mousedown', substractUnit);
  addControl.addEventListener('mousedown', addUnit);

  substractControl.addEventListener('mouseup', stopSubstract);
  addControl.addEventListener('mouseup', stopAdd);
};

setupCounters('.pixel-counter');