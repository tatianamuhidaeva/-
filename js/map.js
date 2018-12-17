function init(ymaps) {
  var myMap = new ymaps.Map('map', {
    center: [44.504109, 33.590580],
    zoom: 13.84,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  });
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      layout: 'round#zoomLayout',
      position:{
        top: '307px',
        left: '15px'
      }
    }
  });
  myMap.controls.add(zoomControl);
  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      layout: 'round#buttonLayout',
      position:{
        top: '250px',
        left: '15px'
      }      
    }
  });
  myMap.controls.add(geolocationControl);
  myPlacemark = new ymaps.Placemark([44.506023, 33.598561], {
    hintContent: 'Гостевой дом с орлами',
    balloonContent: 'Россия, Крым, г. Балаклава "Гостевой дом с орлами". Приезжайте к нам в гости!'
  }, {
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/geomark.svg',
    // Размеры метки.
    iconImageSize: [26, 36],
    // Смещение левого верхнего угла иконки относительно
    iconImageOffset: [0, 0]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('drag');
  myMap.behaviors.disable('scrollZoom');
};