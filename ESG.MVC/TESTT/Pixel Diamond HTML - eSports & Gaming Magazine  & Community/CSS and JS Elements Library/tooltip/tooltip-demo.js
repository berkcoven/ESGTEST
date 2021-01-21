const app = require('../../js/utils/app.core');

app.createTooltip({
  container: '.tooltip-wrap',
  direction: 'bottom',
  align: 'center'
});

app.createTooltip({
  container: '.tooltip-wrap-v2',
  direction: 'top',
  tooltipSelector: ['xm-tooltip', 'v2'],
  align: 'center'
});

app.createTooltip({
  container: '.tooltip-wrap1',
  direction: 'bottom',
  align: 'center',
  animation: {
    type: 'zoom'
  }
});

app.createTooltip({
  container: '.tooltip-wrap1-2',
  direction: 'left',
  align: 'bottom',
  animation: {
    type: 'zoom-fade'
  }
});

app.createTooltip({
  container: '.tooltip-wrap2',
  direction: 'right',
  align: 'center',
  offset: 40,
  animation: {
    type: 'fade'
  }
});

app.createTooltip({
  container: '.tooltip-wrap3',
  direction: 'bottom',
  align: 'center',
  animation: {
    type: 'translate-in'
  }
});

app.createTooltip({
  container: '.tooltip-wrap4',
  direction: 'bottom',
  align: 'center',
  animation: {
    type: 'translate-out'
  }
});

app.createTooltip({
  container: '.tooltip-wrap5',
  direction: 'top',
  align: 'center',
  animation: {
    type: 'translate-in-fade'
  }
});

app.createTooltip({
  container: '.tooltip-wrap6',
  direction: 'top',
  align: 'center',
  animation: {
    type: 'translate-out-fade'
  }
});

app.createTooltip({
  container: '.tooltip-wrap7',
  type: 'html',
  direction: 'right',
  align: 'center',
  animation: {
    type: 'translate-out-fade'
  },
  htmlContent: `
  <div class="comment-preview">
    <!-- USER AVATAR -->
    <a href="post-v4.html#op-comments">
      <img class="user-avatar" src="../img/users/06.jpg" alt="user-06">
    </a>
    <!-- /USER AVATAR -->

    <!-- COMMENT PREVIEW TITLE -->
    <a href="post-v4.html#op-comments" class="comment-preview-title">Jessica Croft</a>
    <!-- COMMENT PREVIEW LINK -->
    <a href="post-v4.html" class="comment-preview-link yellow">Jessica Tam to star in the new...</a>
    <!-- COMMENT PREVIEW TEXT -->
    <p class="comment-preview-text">Lorem ipsum dolor sit tameteturre adipisicing elit, incididunt...</p>
  </div>`
});

app.createTooltip({
  container: '.tooltip-wrap8',
  type: 'html',
  direction: 'left',
  align: 'center',
  animation: {
    type: 'zoom-fade'
  },
  eventHandler: 'click',
  htmlContent: `
  <div class="comment-preview">
    <!-- USER AVATAR -->
    <a href="post-v1.html#op-comments">
      <img class="user-avatar" src="../img/users/07.jpg" alt="user-07">
    </a>
    <!-- /USER AVATAR -->

    <!-- COMMENT PREVIEW TITLE -->
    <a href="post-v1.html#op-comments" class="comment-preview-title">Nathan Thompson</a>
    <!-- COMMENT PREVIEW LINK -->
    <a href="post-v1.html" class="comment-preview-link blue">The Clash of Dragons is breaking...</a>
    <!-- COMMENT PREVIEW TEXT -->
    <p class="comment-preview-text">Lorem ipsum dolor sit ameteturre adipisicing elit...</p>
  </div>`
});