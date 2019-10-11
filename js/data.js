'use strict';
(function () {
  var OFFERS_COUNT = 8;
  var OFFERS_TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var CHECKINS = ['12:00', '13:00', '14:00'];
  var CHECKOUTS = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var MIN_LOCATION_Y = 130;
  var MAX_LOCATION_Y = 630;
  var CLIENT_WIDTH = 1200;
  var PHOTOS_AMOUNT = 3;
  var OFFER_TYPES = {
    FLAT: 'Квартира',
    BUNGALO: 'Бунгало',
    HOUSE: 'Дом',
    PALACE: 'Дворец',
  };

  var getPhotos = function () {
    var photos = [];
    var randomPhotos = window.utils.getRandomNumberInRange(1, PHOTOS_AMOUNT);
    for (var i = 1; i <= randomPhotos; i++) {
      photos.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
    }
    return photos;
  };

  var getMockOffers = function () {
    var mocks = [];
    for (var i = 0; i < OFFERS_COUNT; i++) {
      var avatar = 'img/avatars/user0' + (i + 1) + '.png';
      var title = OFFERS_TITLES[window.utils.getRandomNumberInRange(0, OFFERS_TITLES.length)];
      var price = window.utils.getRandomNumberInRange(100, 100000);
      var type = OFFER_TYPES[window.utils.getRandomNumberInRange(0, OFFER_TYPES.length)];
      var rooms = window.utils.getRandomNumberInRange(1, 15);
      var guests = window.utils.getRandomNumberInRange(1, 30);
      var checkin = CHECKINS[window.utils.getRandomNumberInRange(0, CHECKINS.length)];
      var checkout = CHECKOUTS[window.utils.getRandomNumberInRange(0, CHECKOUTS.length)];
      var features = window.utils.shuffleArray(FEATURES);
      var photos = getPhotos(PHOTOS_AMOUNT);
      var locationX = window.utils.getRandomNumberInRange(0, CLIENT_WIDTH);
      var locationY = window.utils.getRandomNumberInRange(MIN_LOCATION_Y, MAX_LOCATION_Y);

      mocks.push({
        author: {
          avatar: avatar,
        },
        offer: {
          title: title,
          address: locationX + ', ' + locationY,
          price: price,
          type: type,
          rooms: rooms,
          guests: guests,
          checkin: checkin,
          checkout: checkout,
          features: features,
          description: 'Описание',
          photos: photos,
          typeName: OFFER_TYPES[type]
        },
        location: {
          x: locationX,
          y: locationY
        }
      });
    }
    return mocks;
  };

  window.data = {
    getMockOffers: getMockOffers
  };
})();