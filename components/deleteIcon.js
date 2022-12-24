import { displayTasks } from './displayTasks.js';

function deleteIcon() {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', deleteTask);
  return i;
}

const deleteTask = (event) => {
  const parent = event.target.parentElement;
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].value == parent.firstChild.firstChild.nextSibling.textContent) {
      taskList.splice(i,1);
      break;
    }
  }
  localStorage.setItem("tasks", JSON.stringify(taskList));
  parent.remove();
  displayTasks();
};

export default deleteIcon;
