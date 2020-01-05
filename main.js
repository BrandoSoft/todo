const addTaskButton = document.querySelector('form button');
const taskInput = document.querySelector('.taskInput');
const searchInput = document.querySelector('.searchInput');
const list = document.querySelector('ul');
const toDoList = [];
const spanCounter = document.querySelector('span');
let taskCounter = 0;

const showCounter = () => {
    taskCounter = toDoList.length;
    spanCounter.textContent = "Liczba zadań: " + taskCounter;

}
const printTasks = (array) => {
    array.forEach((element, key) => {
        list.appendChild(element)
        element.dataset.key = key;
    });
}
const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    console.log(index)
    toDoList.splice(index, 1)
    console.log(toDoList)
    list.textContent = "";
    printTasks(toDoList)
    showCounter();
}
const addTask = (e) => {
    e.preventDefault();
    if (taskInput.value === "") return;
    const tdlItem = document.createElement('li');
    tdlItem.className = 'task';
    tdlItem.innerHTML = "<span>" + taskInput.value + "</span>" + " <button> Usuń </button>"
    toDoList.push(tdlItem);
    taskInput.value = "";
    list.textContent = ""
    tdlItem.querySelector('button').addEventListener('click', removeTask);

    printTasks(toDoList)
    showCounter();
}

const searchTasks = (e) => {
    const searchText = e.target.value.toLowerCase();
    searchToDoList = toDoList.filter(element => element.textContent.toLowerCase().includes(searchText));
    console.log(searchToDoList)
    list.textContent = "";
    printTasks(searchToDoList);
}



searchInput.addEventListener('input', searchTasks);
addTaskButton.addEventListener('click', addTask);