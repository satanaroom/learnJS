'use strict';

const getOneArg = function(oneArg, callback) {
  if (isNaN(oneArg)) {
    return oneArg.substr(0, 30) + '...';
  }else {
    alert('Передана НЕ строка!');
  }
  
};

console.log(getOneArg(prompt('Введите текст для проверки').trim()));