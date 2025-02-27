/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg",
  "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg",
  "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg",
];

const button1 = document.getElementById("prev-button"); // кнопка Назад
const button2 = document.getElementById("next-button"); // кнопка Вперёд

let image1 = document.getElementById("web-tech-image"); // Изображение

button2.addEventListener("click", function () {
  for (let i = 0; i < WEB_TECH_IMAGES.length; i++) {
    if (image1.getAttribute("src") === WEB_TECH_IMAGES[i]) {
      return image1.setAttribute("src", WEB_TECH_IMAGES[1]);
    } else if (image1.getAttribute("src") === WEB_TECH_IMAGES[i + 1]) {
      return image1.setAttribute("src", WEB_TECH_IMAGES[2]);
    } else if (image1.getAttribute("src") === WEB_TECH_IMAGES[i + 2]) {
      return image1.setAttribute("src", WEB_TECH_IMAGES[0]);
    }
  }
});

button1.addEventListener("click", function () {
  for (let i = 2; i < WEB_TECH_IMAGES.length && i >= 0; i--) {
    if (image1.getAttribute("src") === WEB_TECH_IMAGES[i]) {
      return image1.setAttribute("src", WEB_TECH_IMAGES[1]);
    } else if (image1.getAttribute("src") === WEB_TECH_IMAGES[i - 1]) {
      return image1.setAttribute("src", WEB_TECH_IMAGES[0]);
    } else if (image1.getAttribute("src") === WEB_TECH_IMAGES[i - 2]) {
      return image1.setAttribute("src", WEB_TECH_IMAGES[2]);
    }
  }
});
