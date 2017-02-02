
'use strict';

var pin = document.querySelectorAll('.pin');

var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
var form = document.querySelector('.notice__form');
var formTitle = form.querySelector('#title');
var price = form.querySelector('#price');
var address = form.querySelector('#address');
var arrivalTime = form.querySelector('#time');
var departureTime = form.querySelector('#timeout');
var accomodationType = form.querySelector('#type');
var roomsNumber = form.querySelector('#room_number');
var capacity = form.querySelector('#capacity');

// active pin toggler
var disableActivePin = function () {
  var activePin = document.querySelector('.pin--active');
  if (activePin) {
    activePin.classList.remove('pin--active');
  }
};

for (var i = 0; i < pin.length; i++) {
  pin[i].addEventListener('click', function (e) {
    disableActivePin();

    e.currentTarget.classList.add('pin--active');
    dialog.style.display = 'none';
  });
}

dialogClose.addEventListener('click', function () {
  dialog.style.display = 'none';
  disableActivePin();
});

formTitle.required = true;
formTitle.minLength = 30;
formTitle.maxLength = 100;
price.setAttribute('type', 'number');
price.setAttribute('min', '1000');
price.setAttribute('max', '1000000');
price.required = true;
address.required = true;

var toggleSelect = function (element, val) {
  element.value = val;
};

arrivalTime.addEventListener('change', function (e) {
  var time = e.target.value;
  toggleSelect(departureTime, time);
});

departureTime.addEventListener('change', function (e) {
  var time = e.target.value;
  toggleSelect(arrivalTime, time);
});

if (accomodationType.value === 'appartment') {
  price.setAttribute('min', '5000');
}

accomodationType.addEventListener('change', function (e) {
  if (e.target.value === 'appartment') {
    price.setAttribute('min', '5000');
  } else if (e.target.value === 'palace') {
    price.setAttribute('min', '10 000');
  } else if (e.target.value === 'shack'){
    price.setAttribute('min', '0');
  }
});

if(roomsNumber.value === 'single-room'){
  capacity.value = 'no-guests';
};

roomsNumber.addEventListener('change', function (e) {
  if ((e.target.value === 'single-room') || (e.target.value === 'hundred-room')) {
    capacity.value = '3-guests';
  } else {
    capacity.value = 'no-guests';
  }
});
