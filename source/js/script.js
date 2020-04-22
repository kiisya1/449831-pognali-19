/* Меню */

var header = document.querySelector(".header");
var logo = header.querySelector(".header__logo");
var button = header.querySelector(".header__menu-toggle");
var nav = header.querySelector(".header__nav");

header.classList.remove("header--theme-light");
button.classList.remove("header__menu-toggle--no-js");
logo.classList.remove("logo--blue");
nav.classList.add("main-nav--closed");


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (button.classList.contains("header__menu-toggle--active")) {
    header.classList.remove("header--theme-light");
    button.classList.remove("header__menu-toggle--active");
    logo.classList.remove("logo--blue");
    nav.classList.add("main-nav--closed");
    nav.classList.remove("main-nav--opened");
  } else {
    header.classList.add("header--theme-light");
    button.classList.add("header__menu-toggle--active");
    logo.classList.add("logo--blue");
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
  }
});


/* Модальное окно Бизнес-тарифы */

var businessLink = document.querySelector(".prices__business");
var businessBlock = document.querySelector(".business-prices");
var bussinessClose = document.querySelector(".business-prices__close");

businessLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  businessBlock.classList.remove("modal--close");
  businessBlock.classList.add("modal--open");
});

bussinessClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  businessBlock.classList.remove("modal--open");
  businessBlock.classList.add("modal--close");
});
