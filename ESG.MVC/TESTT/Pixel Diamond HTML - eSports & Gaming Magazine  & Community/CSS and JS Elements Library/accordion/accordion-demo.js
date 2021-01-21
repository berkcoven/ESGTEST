const app = require('../../js/utils/app.core');

app.createAccordion({
  triggerSelector: '.accordion-trigger',
  contentSelector: '.accordion-content'
});

app.createAccordion({
  triggerSelector: '.accordion-trigger2',
  contentSelector: '.accordion-content2',
  linkTriggers: true
});

app.createAccordion({
  triggerSelector: '.accordion-trigger3',
  contentSelector: '.accordion-content3',
  linkTriggers: true,
  triggerOpens: true
});