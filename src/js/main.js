'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
      do {
        money = prompt('Ваш месячный доход?');
      }
      while (!isNumber(money));
      return +money;
    };

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: start(),
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
      let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
          appData.addExpenses = addExpenses.toLowerCase().split(', ');
          appData.deposit = confirm('Есть ли у Вас депозит в банке?');
      let number = 0;
      let exp = [];
          for(let i = 0; i < 2; i++) {
            exp[i] = prompt('Введите обязательную статью расходов?');

            do {
              number = prompt('Во сколько это обойдется?');
            }
            while(!isNumber(number));
            appData.expenses[exp[i]] = number;
        }
    },
          
    getExpensesMonth: function() {
      let sum = 0;
      for (let key in appData.expenses) {
        sum += +appData.expenses[key];
      }
      return (appData.expensesMonth = sum);
    },

    getBudget: function() {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {
      return Math.ceil(appData.mission / appData.budgetMonth);
    },

    getStatusIncome: function() {
      if (appData.budgetDay >= 1200) {
        return ('У Вас высокий уровень дохода');
      }else if (appData.budgetDay > 600 || appData.budgetDay === 600) {
        return ('У Вас средний уровень дохода');
      }else if (appData.budgetDay > 0 || appData.budgetDay === 0) {
        return ('К сожалению, у Вас уровень дохода ниже среднего');
      }else if (appData.budgetDay < 0) {
        return ('Что-то пошло не так');
      }
    },

};

appData.asking();

console.log('Расходы за месяц: ' + appData.getExpensesMonth());

appData.getBudget();

if (appData.getTargetMonth() >= 0) {
  console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяца');
} else {
  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');

for (let prop in appData) {
  console.log(prop + ': ' + appData[prop]);
}
