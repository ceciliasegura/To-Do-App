const todoInput = document.querySelector("#todo-input");
const clearButton = document.querySelector("#clear-button");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");
let counterItem = 0;

addButton.addEventListener("click", function () {
    let textInput = todoInput.value;
    if (textInput !== "") {
        counterItem++;
        let li = document.createElement('li');
        li.innerHTML = `${textInput} <button id= "delete-item${counterItem}">Delete</button>`;
        todoList.appendChild(li);
        todoInput.value = "";
        const deleteItem = document.querySelector("#delete-item" + counterItem);
        deleteItem.addEventListener("click", function () {
            todoList.removeChild(li);
        });
    }
});

clearButton.addEventListener("click", function () {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});


