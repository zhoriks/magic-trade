ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.753215, 37.622504],
    zoom: 10,
  }, {
    searchControlProvider: 'yandex#search',
  });

  const { latitude, longitude } = coordinates; // извлечение из БД координаты конкретной карточки
  const arrCoordinates = 3; // количество карточек в продаже, для отображения на карте мира

  arrCoordinates.forEach((cards) => {
    cards = new ymaps.GeoObject({
      geometry: {
        type: 'Point',
        coordinates: [latitude, longitude],
      },
    }, {
      preset: 'islands#icon',
      iconColor: '#FF0000',
      draggable: false,
    });
    myMap.geoObjects
      .add(cards);
  });
}
