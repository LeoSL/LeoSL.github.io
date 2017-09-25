function toggle(element, from, to) {
  var mainImage = document.getElementById(element);
  mainImage.className = mainImage.className.replace(from, to);
};

function showHome() {
  toggle('home', 'hidden', 'visible');
  toggle('about', 'visible', 'hidden');
  toggle('work', 'visible', 'hidden');
};

function showAbout() {
  toggle('about', 'hidden', 'visible');
  toggle('home', 'visible', 'hidden');
  toggle('work', 'visible', 'hidden');
};

function showWork() {
  toggle('work', 'hidden', 'visible');
  toggle('about', 'visible', 'hidden');
  toggle('home', 'visible', 'hidden');
}

function init() {
  document.getElementById('about-menu-js').onclick = showAbout;
  document.getElementById('work-menu-js').onclick = showWork;
  document.getElementById('home-menu-js').onclick = showHome;
};

window.onload = init;
