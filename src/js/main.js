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
    
const AppData = function() {
  this.income = {};
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.incomeMonth = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.check = function(){
  start.setAttribute('disabled', 'disabled');
  salaryAmount.addEventListener('input', function() {
    if(salaryAmount.value !== '') {
    start.removeAttribute('disabled');
    } else {
    start.setAttribute('disabled', 'disabled');
    }
  });
};

AppData.prototype.start = function() {
  this.budget = +salaryAmount.value;
  this.getExpenses();
  this.getExpensesMonth();
  this.getIncome();
  this.getIncomeMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.showResult();
  this.blocked();
};

AppData.prototype.showResult = function() {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcPeriod();
  periodSelect.addEventListener('input', () => {
    incomePeriodValue.value = this.calcPeriod();
  });
};

AppData.prototype.addExpensesBlock = function() {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3) {
    expensesPlus.style.display = 'none';
  }
};

AppData.prototype.addIncomeBlock = function() {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll('.income-items');
  if(incomeItems.length === 3) {
    incomePlus.style.display = 'none';
  }
};

AppData.prototype.getExpenses = function(){
  expensesItems.forEach(item => {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if(itemExpenses !== '' && cashExpenses !== ''){
      this.expenses[itemExpenses] = cashExpenses;
    }
  }, this);
};

AppData.prototype.getIncome = function() {
  incomeItems.forEach(item => {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !== ''){
      this.income[itemIncome] = cashIncome;
    }
  });
};

AppData.prototype.getAddExpenses = function() {
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(item => {
    item = item.trim();
    if(item !== '') {
      this.addExpenses.push(item);
    }
  });
};

AppData.prototype.getAddIncome = function() {
  additionalIncomeItem.forEach(item => {
    let itemValue = item.value.trim();
    if(itemValue !== ''){
      this.addIncome.push(itemValue);
    }
  });
};  

AppData.prototype.getExpensesMonth = function() {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};

AppData.prototype.getIncomeMonth = function() {
  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};

AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function() {
  return Math.ceil(targetAmount.value / this.budgetMonth);
};

AppData.prototype.getStatusIncome = function() {
  if (this.budgetDay >= 1200) {
    return ('У Вас высокий уровень дохода');
  }else if (this.budgetDay > 600 || this.budgetDay === 600) {
    return ('У Вас средний уровень дохода');
  }else if (this.budgetDay > 0 || this.budgetDay === 0) {
    return ('К сожалению, у Вас уровень дохода ниже среднего');
  }else if (this.budgetDay < 0) {
    return ('Что-то пошло не так');
  }
};

AppData.prototype.getInfoDeposit = function() {
  if (this.deposit) {
    do {
      this.percentDeposit = prompt('Какой годовой процент?', 10);
          
    }
    while (!isNumber(this.percentDeposit));
  } 
  do {
      this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
          
    }
    while (!isNumber(this.moneyDeposit));
};

AppData.prototype.calcPeriod = function() {
  return this.budgetMonth * periodSelect.value;
};

AppData.prototype.changeAmount = function() {
  periodAmount.innerHTML = periodSelect.value;
};

AppData.prototype.blocked = function(){
  document.querySelectorAll('.data input[type=text]').forEach(function(item){
    item.disabled = true;
  });
  start.style.display = 'none';
  cancel.style.display = 'block';
};

AppData.prototype.reset = function(){
  document.querySelectorAll('.data input[type = text]').forEach(function(item){
    item.disabled = false;
    item.value = '';
    periodSelect.value = '0';
    periodAmount.innerHTML = periodSelect.value;
  });
  document.querySelectorAll('.result input[type = text]').forEach(function(item) {
    item.disabled = false;
    item.value = '';
  });
  start.style.display = 'block';
  cancel.style.display = 'none';
  for (let i = 1; i < incomeItems.length; i++) {
    incomeItems[i].remove();
  }
  for (let i = 1; i < expensesItems.length; i++) {
    expensesItems[i].remove();
  }
};

const appData = new AppData();

AppData.prototype.eventListeners = function() {
  start.addEventListener('click', appData.start.bind(appData));
  start.addEventListener('click', appData.check);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomePlus.addEventListener('click', appData.addIncomeBlock);
  periodSelect.addEventListener('input', appData.changeAmount);
  cancel.addEventListener('click', appData.reset);
};

appData.eventListeners();