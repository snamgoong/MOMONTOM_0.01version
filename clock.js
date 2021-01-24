const clockContainer = document.querySelector(".js-clock"),
    clock = clockContainer.querySelector("h1");


function getTime() {
    const date = new Date();
    const si = date.getHours();
    const pun = date.getMinutes();
    const cho =  date.getSeconds();
    clock.innerText = (`${si < 10 ? `0${si}` : si}: ${pun <10 ? `0${pun}` : pun}:${cho <10 ? `0${cho}`: cho}`);
}



function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();