const panes = document.querySelectorAll('.pane-container .pane');
for (let j = 0; j < panes.length; j++) {
  panes[j].addEventListener('mouseover', () => {
    panes.forEach((pane) => {
      pane.style.background = 'rgba(0, 0, 0, 0.552)';
    });
    panes[j].style.background = 'transparent';
  });

  panes[j].addEventListener('mouseout', () => {
    panes.forEach((pane) => {
      pane.style.background = '';
    });
    panes[j].style.background = '';
  });
}

const btn = document.querySelector('.discover');
const curtains = document.querySelectorAll('.curtain');
const discover_page = document.querySelector('.discover-page');
const pane_container = document.querySelector('.pane-container');

btn.addEventListener('click', discoverPage);

function discoverPage() {
  curtains.forEach((curtain) => {
    curtain.classList.add('active');
  });
  discover_page.classList.add('active');
}

const back = document.querySelector('.ret.left');
const nxt = document.querySelector('.ret.right');

back.addEventListener('click', () => {
  curtains.forEach((curtain) => {
    curtain.classList.remove('active');
  });
  discover_page.classList.remove('active');
});

var index = 0;

function nxtpane() {
  panes.forEach((pane) => {
    pane.style.background = 'rgba(0, 0, 0, 0.552)';
  });

  panes[index].style.background = 'transparent';

  index++;

  if (index >= panes.length) {
    index = 0;
  }
}

nxt.addEventListener('click', nxtpane);