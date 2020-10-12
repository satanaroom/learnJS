"use strict";

let num = 266219;

let numString = num.toString();
console.log(numString);

let numSplit = numString.split('');
console.log(numSplit);

let numReduce = numSplit.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(numReduce);

let numDegree = numReduce ** 3;
console.log(numDegree);

let numString2 = numDegree.toString();
console.log(numString2);

let numSplit2 = numString2.split('');
console.log(numSplit2);

let result = numSplit2.slice(0, 2);
console.log(result);
