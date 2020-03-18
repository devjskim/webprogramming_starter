
const title = document.querySelector("#title");

const BASE_COLOR = "blue";
const OTHER_COLOR = "rgb(52, 73, 94)";

function handleResize(){
    console.log();
}

function handleClick(){
    const current = title.style.color;
    if(current == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}
// toggle title's font color!

function init(){
    title.style.color = BASE_COLOR;
    window.addEventListener("click",handleClick);
}

init();

