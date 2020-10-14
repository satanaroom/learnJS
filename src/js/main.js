'use strict';

let arr = ['234234', '1111', '456456', '555', '888', '2000000000', '0102'];

let twoAndFourElements = arr.filter(function(n){
  if (Number(n.slice(0, 1)) === 2 || Number(n.slice(0, 1)) === 4) {
    return n;
  }
});

console.log(twoAndFourElements);

let arr2 = [];

for (let i = 1; i <= 100; i++){
  arr2.push(i);
}
arr2.filter(function(n){
  if (n !== 1 && (n === 2 || n % 2 !== 0) && (n === 3 || n % 3 !== 0) && (n === 5 || n % 5 !== 0) && (n === 7 || n % 7 !== 0) && (n === 9 || n % 9 !== 0)) {
    console.log(n + ' - делители этого числа: 1 и ' + n);
  } 
});




