const inputTodoQuery = document.querySelector('.todo-input');
const btnAddTodoQuery = document.querySelector('.add-todo');
const inputTodoRemoveAtIndexQuery = document.querySelector('.index-input');
const btnRemoveAtIndexQuery = document.querySelector('.remove-todo');
const btnDeleteAll = document.querySelector('.delete-all');
const olTodoList = document.querySelector('.todo-list');
const todos = [];

const printTodo = function(str) {
    const todoItem = document.createElement('li');
    todoItem.innerText = str;
    olTodoList.appendChild(todoItem);
}

const printEverything = function() {
    for (const todo of todos) {
        printTodo(todo);
    }
}

const addToDoToArr = function(todo) {
    todos.push(todo);
}


btnAddTodoQuery.addEventListener('click', function(){
    addToDoToArr(inputTodoQuery.value);
    printTodo(inputTodoQuery.value);
    inputTodoQuery.value = '';
    inputTodoQuery.focus();
});

const removeTodo = function (num) {
    let numberedNum = Number(num);
    todos.splice(numberedNum, 1);
}

const clearTodo = function() {
    todos = [];
}

const removeChildLi = function(num) {
    let numberedNum = Number(num);
    olTodoList.removeChild(olTodoList.childNodes[numberedNum])
}

btnRemoveAtIndexQuery.addEventListener('click', function() {
    let inputedRemoveIndex = inputTodoRemoveAtIndexQuery.value;
    removeTodo(inputedRemoveIndex);
    removeChildLi(inputedRemoveIndex);

});


