const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    sayGreeting(currentValue);
    saveName(currentValue);
}

function askName(text){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function sayGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Beat Yesterday ${text}!`;
}

function loadName(text){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askName();
    } else{
        sayGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();