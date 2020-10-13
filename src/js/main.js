'use strict';

let money = prompt('Ваш месячный доход?', 55000);

let income = "freelance";

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
'FOOD, internet, TRIP');
console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у Вас депозит в банке?', true);

const mission = 150000;
let period = 6;

let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');

const getExpensesMonth = function() {
  return amount1 + amount2;
};
console.log(getExpensesMonth());

const getAccumulatedMonth = function() {
  return money - amount1 - amount2;
};

let accumulatedMonth = getAccumulatedMonth();

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);

let getStatusIncome = function() {
  if (budgetDay >= 1200){
    console.log('У Вас высокий уровень дохода');
  }else if (600 > budgetDay > 1200, budgetDay === 600){
    console.log('У Вас средний уровень дохода');
  }else if (0 > budgetDay > 600, budgetDay === 0){
    console.log('К сожалению, у Вас уровень дохода ниже среднего');
  }else if (budgetDay < 0){
    console.log('Что-то пошло не так');
  }
};
console.log(getStatusIncome());

const getTargetMonth = function() {
  return Math.ceil(mission / accumulatedMonth);
};
console.log(getTargetMonth());
