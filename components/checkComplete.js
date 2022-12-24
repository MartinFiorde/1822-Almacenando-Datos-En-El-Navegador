const checkComplete = (complete) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', completeTask);
  if (complete) {
    i.classList.toggle('fas');
    i.classList.toggle('completeIcon');
    i.classList.toggle('far');
  }
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const parent = event.target.parentElement.parentElement;
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].value == parent.firstChild.firstChild.nextSibling.textContent) {
      taskList[i].complete = !taskList[i].complete;
      localStorage.setItem("tasks", JSON.stringify(taskList));
      break;
    }
  }
};

export default checkComplete;
