export const dateElement = (date) => {
    const li = document.createElement("li");
    li.classList.add("date");
    li.innerHTML = date;
    return li;
}