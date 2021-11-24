
let img = document.querySelector('.image_wrap');
let docBody = document.querySelector('#docBody')
let value = 0;
let count = 0;

function imageSlideNext() {
  count++;
  value += 100;
  img.style.transform = `translateX(${-value}%)`;
  console.log(count, value, img.style.transform);
  docBody.style.background = `url(../slider/images/${count+1}.jpg)`;

  if (count == 5) {
    img.style.transform = `translateX(0px)`;
    count = 0;
    value = 0;
    docBody.style.background = `url(../slider/images/${count+1}.jpg)`;
  }
}

function imageSlidePrev() {
  if (value == 0) {
    img.style.transform = `translateX(500%)`;
    count = 5;
    value = 500;
    docBody.style.background = `url(../slider/images/${count}.jpg)`;
  }

  count--;
  value -= 100;
  img.style.transform = `translateX(${-value}%)`;
  console.log(count, value, img.style.transform);
  docBody.style.background = `url(../slider/images/${count+1}.jpg)`;
}

