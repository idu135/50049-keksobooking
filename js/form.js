
'use strict';

var pin = document.querySelectorAll('.pin');
var pinList = Array.prototype.slice.call(pin); // преобразуем nodelist в array
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
var form = document.querySelector('.notice__form');
var formTitle = form.querySelector('#title');
var price = form.querySelector('#price');
var address = form.querySelector('#address');
var arrivalTime = form.querySelectorAll('#time option');
var arrivalTimeList = Array.prototype.slice.call(arrivalTime); // преобразуем nodelist в array
var departureTime = form.querySelector('#timeout option');
var departureTimeList = Array.prototype.slice.call(departureTime); // преобразуем nodelist в array


for (var i = 0; i < pinList.length; i++) {
  pinList[i].classList.remove('pin--active');
  pinList[i].addEventListener('click', function () {
    pinList[i].classList.add('pin--active');
    dialog.style.display = 'none';
  });
}

dialogClose.addEventListener('click', function () {
  dialog.style.display = 'none';
  if (pinList[i].classList.contains('pin--active')) {
    pinList[i].classList.remove('pin--active');
  }
});

formTitle.required = true;
formTitle.minLength = 30;
formTitle.maxLength = 100;
price.setAttribute('type', 'number');
price.setAttribute('min', '1000');
price.setAttribute('max', '1000000');
price.required = true;
address.required = true;

for (var k = 0; k < arrivalTimeList; k++) {
  if (arrivalTimeList[k].hasAttribute('selected')) {
    departureTimeList[k].setAttribute('selected');
  }
}
