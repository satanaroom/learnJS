'use strict';

let lang = prompt('Введите язык, на котором будут отображаться дни недели (допустимый ввод: русский язык - ru,　английский язык - en)');

let monday = 'monday';
let tuesday = 'tuesday';
let wednesday = 'wednesday';
let thursday = 'thursday';
let friday = 'friday';
let saturday = 'saturday';
let sunday = 'sunday';

let mondayRu = 'понедельник';
let tuesdayRu = 'вторник';
let wednesdayRu = 'среда';
let thursdayRu = 'четверг';
let fridayRu = 'пятница';
let saturdayRu = 'суббота';
let sundayRu = 'воскресенье';

if (lang === 'en'){
  console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
} else if (lang ==='ru'){
  console.log(mondayRu, tuesdayRu, wednesdayRu, thursdayRu, fridayRu, saturdayRu, sundayRu);
}

switch (lang){
  case 'ru':
    console.log(mondayRu, tuesdayRu, wednesdayRu, thursdayRu, fridayRu, saturdayRu, sundayRu);
    break;
  case 'en':
    console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    break;
}

let weekDays = [
  [monday, tuesday, wednesday,　thursday, friday, saturday, sunday],
  [mondayRu, tuesdayRu, wednesdayRu, thursdayRu, fridayRu, saturdayRu, sundayRu]
];

lang === 'ru' ? console.log(weekDays[0][0]) : console.log(weekDays[1][0]);

let namePerson;