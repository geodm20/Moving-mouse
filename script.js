const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");

let cursorPos = {x:0, y:0};
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function defineWindowSize(){
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
}

function mouseMove(e){
    cursorPos = {x:e.clientX, y:e.clientY};
    follow(); 
}

function touchMove(e){
    cursorPos = {x:e.targetTouches[0].offsetX, y:e.targetTouches[0].offsetY};
    follow();
}

const followCursor = (el, xratio, yratio) => {
    const elOffset = el.getBoundingClientRect();
    const centerX = elOffset.x + elOffset.width/2;
    const centerY = elOffset.y + elOffset.height/2;
    const distanceLeft = Math.round(((cursorPos.x - centerX)*100)/window.innerWidth);
    const distanceTop = Math.round(((cursorPos.y - centerY)*100)/window.innerHeight);
    el.style.transform = `translate(${distanceLeft/xratio}px, ${distanceTop/yratio}px)`;
}

const follow = () => {
    if(ears) followCursor(ears, -0, -0);
    if(head) followCursor(head, 6, 6);
    if(eyes) followCursor(eyes, 1.8, 1.8);
    if(snout) followCursor(snout, 1.5, 1.5);
    if(nose) followCursor(nose, 1, 1);
}

window.addEventListener("resize", defineWindowSize);
window.addEventListener("mousemove", mouseMove);
window.addEventListener("touchmove", touchMove);