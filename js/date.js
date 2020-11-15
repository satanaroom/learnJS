/*
1) Выведите на страницу текущую дату и время в 2-х форматах: 
    a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  
    б) '04.02.2020 - 21:05:33' 
2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов 
в зависимости от числа, "час, часов, часа"
3) Для вывода в формате (б) напишите функцию, которая будет добавлять 
0 перед значениями которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)
4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду 
*/


'use strict';

let date = new Date(),
    day = date.getDay(),
    dateMonth = date.getDate(),
    year = date.getUTCFullYear(),
    month = date.getMonth(),
    hours = date.getHours(),
    hour = 'час',
    minutes = date.getMinutes(),
    minute = 'минут',
    seconds = date.getSeconds(),
    second = 'секунд',
    firstStroke = document.querySelector('.first-stroke'),
    secondStroke = document.querySelector('.second-stroke');

if (day === 0) {
  day = 'Воскресенье';
} else if (day === 1) {
  day = 'Понедельник';
} else if (day === 2) {
  day = 'Вторник';
} else if (day === 3) {
  day = 'Среда';
} else if (day === 4) {
  day = 'Четверг';
} else if (day === 5) {
  day = 'Пятница';
} else if (day === 6) {
  day = 'Суббота';
}

if (month === 0) {
    month = 'января';
  } else if (month === 1) {
    month = 'февраля';
  } else if (month === 2) {
    month = 'марта';
  } else if (month === 3) {
    month = 'апреля';
  } else if (month === 4) {
    month = 'мая';
  } else if (month === 5) {
    month = 'июня';
  } else if (month === 6) {
    month = 'июля';
  } else if (month === 7) {
    month = 'августа';
  } else if (month === 8) {
    month = 'сентября';
  } else if (month === 9) {
    month = 'октября';
  } else if (month === 10) {
    month = 'ноября';
  } else if (month === 11) {
    month = 'декабря';
  }

const createFirstStroke = () => {
    firstStroke.textContent = `
        Сегодня ${day}, ${dateMonth} ${month} 
        ${year} года, ${hours} ${hour} ${minutes} ${minute} ${seconds} ${second}
    `;
};
createFirstStroke();

setInterval(createFirstStroke, 1000);

secondStroke.textContent = `Сегодня: ${day}`;

