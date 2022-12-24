export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach((task) => {
        if (!unique.includes(task.dateFormat)) {
            unique.push(task.dateFormat);
        }
    });

    unique.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    });
    
    return unique;
}