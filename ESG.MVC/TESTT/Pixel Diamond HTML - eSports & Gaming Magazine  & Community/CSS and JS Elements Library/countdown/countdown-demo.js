const app = require('../../js/utils/app.core');

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
app.createCountdown({
  container: '#countdown-arc',
  startDate: new Date(today.year, today.month, today.day - 1),
  targetDate: new Date(today.year, today.month, today.day + 4),
  global: {
    underlineConfig: {
      width: 66,
      height: 66,
      lineWidth: 6
    },
    arcConfig: {
      width: 66,
      height: 66,
      lineWidth: 6,
      pad: true
    }
  }
});

app.createProgressBar({
  container: '#progress-bar-cd'
});

const pg1 = app.createProgressBar({
  container: '#progress-bar-cd',
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  controlAnimation: true
});

if (pg1) {
  app.createCountdown({
    container: '#countdown-text',
    startDate: new Date(today.year, today.month - 1, today.day),
    targetDate: new Date(today.year, today.month, today.day + 12),
    textOnly: true,
    onStep: pg1.render
  });
}

app.createProgressBar({
  width: 140,
  container: '#progress-bar-cd2'
});

const pg2 = app.createProgressBar({
  width: 140,
  container: '#progress-bar-cd2',
  gradient: {
    colors: ['#713fcb', '#00e3d0']
  },
  controlAnimation: true
});

if (pg2) {
  app.createCountdown({
    container: '#countdown2-text',
    startDate: new Date(today.year, today.month - 1, today.day),
    targetDate: new Date(today.year, today.month, today.day + 12),
    textOnly: true,
    onStep: pg2.render
  });
}