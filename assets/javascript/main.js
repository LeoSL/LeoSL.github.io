const PageObjects = {
  mainTitle: {
    menu: document.getElementById('main-title-js')
  },
  about: {
    menu: document.getElementById('about-menu-js'),
    description: document.getElementById('about')
  },
  work: {
    menu: document.getElementById('work-menu-js'),
    description: document.getElementById('work')
  },
  home: {
    menu: document.getElementById('home-menu-js'),
    description: document.getElementById('home')
  },
  logo: {
    menu: document.getElementById('logo-menu-js')
  }
};

const Main = {
  getActiveMenu: function getActiveMenu() { return document.getElementsByClassName('active')[0]; },

  toggleVisibility: function toggleVisibility(element, from, to) {
    const documentElement = element;
    documentElement.className = documentElement.className.replace(from, to);
  },

  toggleActiveStatus: function toggleActiveStatus(disable, enable) {
    disable.classList.remove('active');
    enable.classList.add('active');
  },

  showHome: function showHome() {
    Main.toggleVisibility(PageObjects.home.description, 'hidden', 'visible');
    Main.toggleVisibility(PageObjects.about.description, 'visible', 'hidden');
    Main.toggleVisibility(PageObjects.work.description, 'visible', 'hidden');
    Main.toggleActiveStatus(Main.getActiveMenu(), PageObjects.home.menu);
  },

  showAbout: function showAbout() {
    Main.toggleVisibility(PageObjects.about.description, 'hidden', 'visible');
    Main.toggleVisibility(PageObjects.home.description, 'visible', 'hidden');
    Main.toggleVisibility(PageObjects.work.description, 'visible', 'hidden');
    Main.toggleActiveStatus(Main.getActiveMenu(), PageObjects.about.menu);
  },

  showWork: function showWork() {
    Main.toggleVisibility(PageObjects.work.description, 'hidden', 'visible');
    Main.toggleVisibility(PageObjects.about.description, 'visible', 'hidden');
    Main.toggleVisibility(PageObjects.home.description, 'visible', 'hidden');
    Main.toggleActiveStatus(Main.getActiveMenu(), PageObjects.work.menu);
  },

  initializeGandalfPopover: function initializeGandalfPopover() {
    const gandalfImg =
      "<img src='./assets/imgs/gandalf.png' width='250' alt='a grey cat named as Gandalf'>";
    $('#show-gandalf').popover({ // conscious jQuery implementation to trigger popover
      html: true,
      trigger: 'focus',
      content: gandalfImg
    });
  },

  init: function init() {
    Main.initializeGandalfPopover();
    PageObjects.mainTitle.menu.onclick = Main.showAbout;
    PageObjects.about.menu.onclick = Main.showAbout;
    PageObjects.work.menu.onclick = Main.showWork;
    PageObjects.home.menu.onclick = Main.showHome;
    PageObjects.logo.menu.onclick = Main.showHome;
  }
};

window.onload = Main.init;
