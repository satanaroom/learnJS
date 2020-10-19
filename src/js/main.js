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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: start(),
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {

      if (confirm('Есть ли у Вас дополнительный источник заработка?')) {
        let itemIncome; 
        let cashIncome;
        do {
          itemIncome = prompt('Какой у Вас есть дополнительный заработок?', 'Taxi');
        }
        while (!isNaN(itemIncome));

        do {
          cashIncome = prompt('Сколько в месяц Вы зарабатываете на этом?');
        }
        while (!isNumber(cashIncome));
        appData.income[itemIncome] = cashIncome;
      }

      let addExpenses; 
        do {
          addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        }
        while (!isNaN(addExpenses));

          appData.addExpenses = addExpenses.toLowerCase().split(', ');
          appData.deposit = confirm('Есть ли у Вас депозит в банке?');
      let number = 0;
      let exp = [];
          for(let i = 0; i < 2; i++) {
            do {
            exp[i] = prompt('Введите обязательную статью расходов?');
            }
            while(!isNaN(exp[i]));
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

    getInfoDeposit: function() {
      if (appData.deposit) {
        do {
          appData.percentDeposit = prompt('Какой годовой процент?', 10);
          
        }
        while (!isNumber(appData.percentDeposit));
      } 
      do {
          appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
          
        }
        while (!isNumber(appData.moneyDeposit));
    },

    calcSaveMoney: function() {
      return appData.budgetMonth * appData.period;
    },

};

appData.asking();

console.log('Расходы за месяц: ' + appData.getExpensesMonth());

appData.getInfoDeposit();

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

let getToUpperCaseAnyArray = function(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].charAt(0).toUpperCase() + array[i].substring(1)); 
  }
  return arr.join(', ');
};

console.log(getToUpperCaseAnyArray(appData.addExpenses));

