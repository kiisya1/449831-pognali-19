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

if (businessLink) {
  businessLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessBlock.classList.remove("modal--close");
    businessBlock.classList.add("modal--open");
  });
}

if (bussinessClose) {
  bussinessClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessBlock.classList.remove("modal--open");
    businessBlock.classList.add("modal--close");
  });
}

/* Фильтрация по региону на странице каталога */

var regions = document.querySelector(".regions");
var regionsButton = document.querySelector(".regions__button");
var regionsClose = document.querySelector(".regions__close");

if (regionsButton) {
  regionsButton.classList.remove("regions__button--no-js");
  regions.classList.add("regions--closed");
  regionsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    regionsButton.classList.toggle("regions__button--close");
    if (regions.classList.contains("regions--closed")) {
      regions.classList.remove("regions--closed");
      regions.classList.add("regions--opened");
    } else {
      regions.classList.add("regions--closed");
      regions.classList.remove("regions--opened");
    }
  });
}

if (regionsClose) {
  regionsClose.classList.remove("regions__close--no-js");
  regionsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    regionsButton.classList.remove("regions__button--close");
    regions.classList.remove("regions--opened");
    regions.classList.add("regions--closed");
  });
}

/* Свернуть/развернуть фильтры на странице каталога */

var filterButtons = document.querySelectorAll(".legend");

if (filterButtons.length > 0) {
  [].forEach.call(filterButtons, function(item) {
    item.classList.add("legend--closed", "filter--closed");
    item.addEventListener('click', function() {
      if (item.classList.contains("legend--closed", "filter--closed")) {
        item.classList.remove("legend--closed", "filter--closed");
      } else {
        item.classList.add("legend--closed", "filter--closed");
      }
    });
  });
}

/* Карта */

var mapContainer = document.querySelector(".contact-us__map");

if (mapContainer) {
  mapContainer.classList.remove("contact-us__map--no-js");

  ymaps.ready(init);
    function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
        // Координаты центра карты. Порядок по умолчанию: «широта, долгота».
        center: [59.938635, 30.323118],
        // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
        zoom: 15
      }, {
        searchControlProvider: "yandex#search"
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "г. Санкт-Петербург, ул. Большая Конюшенная, 19/8"
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../../img/map-marker.svg",
        // Размеры метки.
        iconImageSize: [54, 54],
        // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
        iconImageOffset: [-27, -27]
      });

      myMap.geoObjects.add(myPlacemark);
  };
}
