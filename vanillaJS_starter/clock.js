const clockContatiner=document.querySelector(".js-clock");
clockTitle = clockContatiner.querySelector("h1");

function getTime(){
    const date = new Date();
    const minite = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}`:hour}:${minite < 10 ? `0${minite}`:minite}:${second < 10 ? `0${second}`:second}`;
    
}

function init(){
    const date = new Date;
    getTime();
    setInterval(getTime, 500)
}

init();