'use strict';

let money = 55000;
let income = "freelance";
let addExpenses = "FOOD, INTERNET, entertainment";
let deposit = true;
const mission = 150000;
let period = 6;

console.log(money, income, deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' рублей.');
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log(budgetDay);

money = prompt('Ваш месячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

deposit = confirm('Есть ли у Вас депозит в банке?');
console.log(deposit);

let expenses1;
let expenses2;
let amount1;
let amount2;

expenses1 = prompt('Введите обязательную статью расходов');
console.log(expenses1);
amount1 = prompt('Во сколько это обойдется?');
console.log(amount1);
expenses2 = prompt('Введите обязательную статью расходов');
console.log(expenses2);
amount2 = prompt('Во сколько это обойдется?');
console.log(amount2);

let budgetMonth;

budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ' + budgetMonth);

let missionPeriod = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за: ' + missionPeriod + ' месяцев');

budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay >= 1200){
  console.log('У Вас высокий уровень дохода');
}else if (600 > budgetDay > 1200, budgetDay === 600){
  console.log('У Вас средний уровень дохода');
}else if (0 > budgetDay > 600, budgetDay === 0){
  console.log('К сожалению, у Вас уровень дохода ниже среднего');
}else if (budgetDay < 0){
  console.log('Что-то пошло не так');
}