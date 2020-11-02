'use strict';

let date = new Date(),
  dayTime = date.getHours(),
  day = date.getDay(),
  timeToNewYear = new Date('31 december 2020'),
  morningDayTime = 'Доброе ',
  dayAndEveningDayTime = 'Добрый ',
  nightDayTime = 'Доброй ',
  newYearTime = Math.floor((timeToNewYear - date) / 1000 / 86400);


if (dayTime >= 5 && dayTime < 12) {
  dayTime = 'утро';
} else if (dayTime >= 12 && dayTime < 18) {
  dayTime = 'день';
} else if (dayTime >= 18 && dayTime < 25) {
  dayTime = 'вечер';
} else if (dayTime > 0 && dayTime < 5) {
  dayTime = 'ночи';
}

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

if (dayTime === 'утро') {
  console.log(`${morningDayTime}${dayTime}
Сегодня: ${day}
Текущее время: ${date.toTimeString()}
До нового года осталось: ${newYearTime} дней`);
} else if (dayTime === 'вечер' || dayTime === 'день') {
  console.log(`${dayAndEveningDayTime}${dayTime}
Сегодня: ${day}
Текущее время: ${date.toTimeString()}
До нового года осталось: ${newYearTime} дней`);
} else if (dayTime === 'ночи') {
  console.log(`${nightDayTime}${dayTime}
Сегодня: ${day}
Текущее время: ${date.toTimeString()}
До нового года осталось: ${newYearTime} дней`);
}

