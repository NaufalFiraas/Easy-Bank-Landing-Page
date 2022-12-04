const navbar = document.getElementsByClassName('navbar')[0];
const navbarToggle = document.getElementsByClassName('toggle')[0];
const navButtonWrapper = document.getElementsByClassName('nav-button-wrapper')[0];
const navMenus = document.getElementsByClassName('nav-menus')[0];

navbarToggle.addEventListener('click', function (e) {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
    navButtonWrapper.classList.toggle('active');
    navMenus.classList.toggle('active');
});