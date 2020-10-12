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