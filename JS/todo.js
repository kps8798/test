const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

let toDos = [];

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function delTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodo();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerHTML = newTodo.text;
    button.innerHTML = "X";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click", delTodo);
}

function todoEvent(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    const objTodo = {
        text: newTodo,
        id: Date.now(),
    }
    if(todoInput.value !== ""){
        todoInput.value = "";
        toDos.push(objTodo);
        paintTodo(objTodo);
        saveTodo();
    }
}

    todoForm.addEventListener("submit", todoEvent);

    const stringArray = localStorage.getItem("todos");

    if (stringArray !== null){
        const parsedArray = JSON.parse(stringArray);
        toDos = parsedArray;
        parsedArray.forEach(paintTodo);
    }