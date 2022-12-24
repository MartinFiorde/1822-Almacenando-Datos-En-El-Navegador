import { createTask } from './addTask.js';
import { dateElement } from './dateElement.js';
import { uniqueDates } from '../services/date.js';

export const displayTasks = () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = document.querySelector('[data-list]');
    const dates = uniqueDates(taskList);
    list.innerHTML = "";
    dates.forEach((date) => {
        const dateMoment = moment(date,"DD/MM/YYYY");
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskMoment = moment(task.dateFormat,"DD/MM/YYYY");
            const diff = dateMoment.diff(taskMoment); //metodo propio de libreria MOMENT para contar diferencia de dias entre 2 fechas
            if (task.dateFormat==date && diff==0) {
                list.appendChild(createTask(task));    
            }
        });
    });
}; 