'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = "freelance",
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у Вас депозит в банке?'),
    mission = 150000,
    period = 6;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};

start();

let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

console.log(addExpenses.toLowerCase().split(', '));

let getExpensesMonth = function() {
  let sum = 0;
  let sum2;
    for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов');
    do {
      sum2 = prompt('Во сколько это обойдется?');
    }
    while (!isNumber(sum2));
    sum += Number(sum2);
  } 
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function() {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день: ' + budgetDay);

let getStatusIncome = function() {
  if (budgetDay >= 1200) {
    return ('У Вас высокий уровень дохода');
  }else if (600 > budgetDay > 1200 || budgetDay === 600) {
    return ('У Вас средний уровень дохода');
  }else if (0 > budgetDay > 600 || budgetDay === 0) {
    return ('К сожалению, у Вас уровень дохода ниже среднего');
  }else if (budgetDay < 0) {
    return ('Что-то пошло не так');
  }
};

console.log(getStatusIncome());

let getTargetMonth = function() {
  return Math.ceil(mission / accumulatedMonth);
};

if (getTargetMonth() >= 0) {
  console.log('Цель будет достигнута за: ' + getTargetMonth() + ' месяца');
} else {
  console.log('Цель не будет достигнута');
}