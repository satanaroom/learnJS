'use strict';

let inputText = document.querySelector('input');

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      fons-size: ${this.fontSize}px
    `;
  }
  
  createDiv() {
    let newDiv = document.createElement('div');
    document.body.append(newDiv);

    newDiv.style.cssText = this.cssText;
    newDiv.textContent = this.cssText;

    if(this.selector[0] === '.'){
      newDiv.classList.add(this.selector.substring(1));
    }
    newDiv.textContent = "DIV создан!";
  }

  createP() {
    let newP = document.createElement('p');
    document.body.append(newP);

    newP.style.cssText = this.cssText;
    newP.textContent = this.cssText;

    if(this.selector[0] === '#'){
      newP.id = this.selector.substring(1);
    }
    newP.textContent = "Параграф создан!";
  }
}

let newDiv = new DomElement('.block', 300, 300, 'red', 44);
let newP = new DomElement('#best', 120, 200, 'blue', 12);

inputText.addEventListener('input', function() {
  if(inputText.value === '.') {
    newDiv.createDiv();
  } else if(inputText.value === '#') {
    newP.createP();
  } else if (inputText.value === '') {
    document.querySelector('div').remove();
  } 
});

inputText.addEventListener('input', function() {
  if (inputText.value === '') {
    document.querySelector('p').remove();
  }
});
