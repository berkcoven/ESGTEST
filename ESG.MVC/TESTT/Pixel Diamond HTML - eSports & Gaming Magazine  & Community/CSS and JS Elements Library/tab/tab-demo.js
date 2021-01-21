const app = require('../../js/utils/app.core');

app.createTab({
  container: '#tab-wrap-01'
});

app.createTab({
  container: '#tab-wrap-02',
  startIndex: 2,
  selectedClass: 'active'
});