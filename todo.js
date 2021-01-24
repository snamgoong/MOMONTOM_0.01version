const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList");

const TODOS_LS = "toDo_List";

let toDosArray = [];

function delToDo(event){
    const btn = event.target;
    const targetLi = btn.parentNode;
    toDoList.removeChild(targetLi);
    const cleanToDosArray = toDosArray.filter(function(toDo){
        console.log(toDo.id, targetLi.id);
        return toDo.id !== parseInt(targetLi.id);
    });
    console.log(cleanToDosArray);
    toDosArray = cleanToDosArray;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArray));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDosArray.length + 1;
    delBtn.innerText = "✂️";
    delBtn.addEventListener("click", delToDo);
    span.innerText = text;
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj = {
        text,
        id : newId
    };
    toDosArray.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();
