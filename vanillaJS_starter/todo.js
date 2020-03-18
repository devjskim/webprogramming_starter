const toDoform = document.querySelector(".js-toDoForm"),
toDoinput = toDoform.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];



function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function painToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteToDo);
    const newID = toDos.length + 1
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newID;
    const toDoObj = {
        text: text,
        id: newID
    }

    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    painToDo(currentValue);
}

function something(toDo){
    painToDo(toDo.text);
}

function loadToDos(){
    const loadedToDo = localStorage.getItem(TODOS_LS);
    if(loadedToDo !== null){
        const parsedToDos = JSON.parse(loadedToDo);
        parsedToDos.forEach(something);
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init()