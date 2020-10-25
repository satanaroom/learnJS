'use strict';

const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed'),
  headerButton = document.querySelector('.header-button');

let todoData = [];

let todoDataLocal = JSON.parse(localStorage.getItem("todoData"));

if(todoDataLocal !== null) {
  todoData = todoDataLocal;
}

const render = function(){
  headerButton.setAttribute('disabled', 'disabled');
  headerInput.addEventListener('input', function() {
    if(headerInput.value !== '') {
      headerButton.removeAttribute('disabled');
    } else {
      headerButton.setAttribute('disabled', 'disabled');
    }
  });

  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData.forEach(function(item) { 
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
    '<div class="todo-buttons">' + '<button class="todo-remove"></button>' + 
    '<button class="todo-complete"></button>' + '</div>';

    if(item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const btnTodoRemove = li.querySelector('.todo-remove');
    btnTodoRemove.addEventListener('click', function() {
      todoData.splice(todoData.indexOf(item), 1);
      render();
    });

    const btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', function() {
      item.completed = !item.completed;
      render();
    });
  });

  localStorage.setItem("todoData", JSON.stringify(todoData));

};

todoControl.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTodo = {
      value: headerInput.value,
      completed: false
  };
  todoData.push(newTodo);
  render();
  headerInput.value = '';
});

render();

//localStorage.getItem(JSON.parse('ToDo'));