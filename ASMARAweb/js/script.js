console.log("Hello!");

const img = document.getElementById("imgth");
const body = document.body;
const herobg = document.getElementById("herobg");
let x = 0;

function scrollBg() {
    setInterval(() => {
        x+=0.2;
        herobg.style.backgroundPosition = x+"px 0px";
    }, 10);
}

window.addEventListener("load", scrollBg)