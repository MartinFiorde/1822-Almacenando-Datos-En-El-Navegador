import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './displayTasks.js';

export const addTask = (evento) => {
  evento.preventDefault();

  const input = document.querySelector('[data-form-input]');
  const value = input.value;

  const calendar = document.querySelector('[data-form-date]');
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");


  if (value == "" || date == "") {
    return;
  }
  input.value = '';
  calendar.value = '';

  const complete = false;

  const taskObj = {
    value,
    dateFormat,
    complete,
  };

  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  const list = document.querySelector('[data-list]');
  displayTasks();
}

export const createTask = (taskObj) => {
  const task = document.createElement('li');
  task.classList.add('card');

  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = taskObj.value;
  taskContent.appendChild(checkComplete(taskObj.complete));
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement("span");
  dateElement.innerHTML = taskObj.dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  return task;
};