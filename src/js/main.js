'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),

    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    
    depositCheck = document.querySelector('#deposit-check'),

    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],

    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],

    additionalExpenses = document.querySelector('.additional_expenses'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),

    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),

    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),

    targetAmount = document.querySelector('.target-amount'),

    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

  
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
    
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    incomeMonth: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    
    start: function() {
      appData.budget = +salaryAmount.value;
      appData.getIncome();
      appData.getIncomeMonth();
      appData.getExpenses();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();
      appData.showResult();
      appData.blocked();
    },
    showResult: function() {
      budgetMonthValue.value = this.budgetMonth;                                                //this
      budgetDayValue.value = this.budgetDay;                                                    //this
      expensesMonthValue.value = this.expensesMonth;                                            //this
      additionalExpensesValue.value = this.addExpenses.join(', ');                              //this
      additionalIncomeValue.value = this.addIncome.join(', ');                                  //this
      targetMonthValue.value = appData.getTargetMonth();
      incomePeriodValue.value = appData.calcPeriod();
      periodSelect.addEventListener('input', function(){
      incomePeriodValue.value = appData.calcPeriod();
      });
    },
    addExpensesBlock: function() {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
    },
    addIncomeBlock: function() {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3) {
        incomePlus.style.display = 'none';
      }
    },
    getExpenses: function(){                                                  //Стрелочная функция (для this)
      expensesItems.forEach(item => {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
          this.expenses[itemExpenses] = cashExpenses;
        }
      });
    },
    getIncome: function() {
      incomeItems.forEach(item => {                                            //Стрелочная функция (для this)
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          this.income[itemIncome] = cashIncome;
        }
      });
    },
    getAddExpenses: function() {                                               //Стрелочная функция (для this)
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(item => {
        item = item.trim();
        if(item !== '') {
          this.addExpenses.push(item);
        }
      });
    },
    getAddIncome: function() {
      additionalIncomeItem.forEach(item => {                                  //Стрелочная функция (для this)
        let itemValue = item.value.trim();
        if(itemValue !== ''){
          this.addIncome.push(itemValue);
        }
      });
    },  
    getExpensesMonth: function() {                                                 //Стрелочная функция (для this)
      for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
      }
    },
    getIncomeMonth: () => {                                                   //Стрелочная функция (для this)
      for (let key in this.income) {
        this.expensesMonth += +this.income[key];
      }
    },
    getBudget: function () {
      appData.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;    //this
      appData.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function() {
      return Math.ceil(targetAmount.value / this.budgetMonth);                      //this
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
    calcPeriod: function() {
      return this.budgetMonth * periodSelect.value;                           //this
    },
    changeAmount: function() {
      periodAmount.innerHTML = periodSelect.value;
    },
    blocked: function(){
      document.querySelectorAll('.data input[type=text]').forEach(function(item){
      item.disabled = true;
      });
      start.style.display = 'none';
      cancel.style.display = 'block';
    },
    reset: function(){
      document.querySelectorAll('.data input[type=text]').forEach(function(item){
        item.disabled = false;
        item.value = '';
      });
      
      start.style.display = 'block';
      cancel.style.display = 'none';

      document.querySelectorAll('.result input[type=text]').forEach(function(item) {
        item.disabled = false;
        item.value = '';
      });
    },
    check: function(){
      start.setAttribute('disabled', 'disabled');
      salaryAmount.addEventListener('input', function() {
        if(salaryAmount.value !== '') {
          start.removeAttribute('disabled');
        } else {
          start.setAttribute('disabled', 'disabled');
        }
      });
    }
};

let foo = appData.start.bind(appData);
console.log(foo);

start.addEventListener('click', appData.start);

start.addEventListener('click', appData.check);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

periodSelect.addEventListener('input', appData.changeAmount);

incomePlus.addEventListener('click', appData.addIncomeBlock);

cancel.addEventListener('click', appData.reset);







