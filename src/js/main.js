'use strict';

const books = document.getElementsByClassName('book');
console.log(books);

console.log(books);

books[1].after(books[0]);           //Перестановка книг
books[4].after(books[3]);
books[3].after(books[2]);
books[4].after(books[3]);
books[5].after(books[4]);

const a = document.getElementsByTagName('a');

a[2].textContent = 'Книга 3. this и Прототипы Объектов';

const add = document.querySelector('.adv');
add.remove();

const ul = document.querySelectorAll('ul');

const li = document.querySelectorAll('li');

console.log(li);

li[9].after(li[8]);                       //Перестановка второй книги 
ul[1].append(li[8]);
li[16].after(li[15]);
ul[1].append(li[16]);
ul[1].append(li[13]);
li[15].before(li[13]);
li[13].before(li[11]);
li[11].before(li[10]);

//36-46 - Пятая книга

li[38].before(li[45]);         //Перестановка пятой книги
li[38].before(li[39]);
li[38].before(li[40]);
li[41].before(li[42]);
li[41].before(li[43]);

const newLi = document.createElement('li');  //Добавление главы и перемещение ее в нужное место
newLi.innerHTML = 'Глава 8: За пределами ES6';
ul[5].append(newLi);
li[56].before(newLi);
