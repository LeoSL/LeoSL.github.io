function hideMainImg() {
  var mainImage = document.getElementById('main-image');
  if (mainImage.classList[0] === 'visible') {
    mainImage.className = 'hidden';
  }
};

function showMainImage() {
  var mainImage = document.getElementById('main-image');
  if (mainImage.classList[0] === 'hidden') {
    mainImage.className = 'visible';
  }
};

function handleAboutMenu() {
  hideMainImg();
};

function handleWorkMenu() {
  hideMainImg();
}

function init() {
  document.getElementById('about-menu-js').onclick = handleAboutMenu;
  document.getElementById('work-menu-js').onclick = handleWorkMenu;
  document.getElementById('home-menu-js').onclick = showMainImage;
};

window.onload = init;
