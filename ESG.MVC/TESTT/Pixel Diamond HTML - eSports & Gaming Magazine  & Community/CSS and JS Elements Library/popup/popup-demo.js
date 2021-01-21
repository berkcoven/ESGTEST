const app = require('../../js/utils/app.core');

app.createPopup({
  container: '#popup-review',
  trigger: '.popup-review-trigger',
  animation: {
    type: 'translate-in-fade'
  }
});

app.createPopup({
  container: '#popup-login',
  trigger: '.popup-login-trigger',
  animation: {
    type: 'translate-out-fade'
  },
  overlay: {
    color: '28, 89, 243',
    opacity: .9
  }
});

app.createPopup({
  container: '#popup-register',
  trigger: '.popup-register-trigger',
  animation: {
    type: 'zoom-fade',
    speed: .4
  },
  overlay: {
    animation: {
      speed: .5
    }
  }
});

app.createPopup({
  container: '#popup-login-02',
  trigger: '.popup-login-02-trigger',
  animation: {
    type: 'fade'
  }
});

app.createPopup({
  container: '#popup-register-02',
  trigger: '.popup-register-02-trigger',
  animation: {
    type: 'translate-in-fade',
    translateOffset: 20
  },
  overlay: {
    opacity: .6
  }
});