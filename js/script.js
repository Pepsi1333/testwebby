console.log("Hello!");

const img = document.getElementById("imgth");
const body = document.body;
const herobg = document.getElementById("herobg");

let x = 0;

function scrollBg() {
    // img.classList.add("loaded");
    // img.style.transform = 'scale(0)'
    // img.style.opacity = '0';
    setTimeout(() => {
        img.style.transform = 'scale(0)'
        img.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        img.style.transitionDuration = '1s';
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 200);

    setTimeout(() => {
        img.style.transition = "none";
        let tick = 0;
        
        setInterval(() => {
            tick+= 0.02;
            img.style.transform = 'rotate(' + Math.sin(tick) * 5 + 'deg)';
        }, 10);
    }, 1200);

    setInterval(() => {
        x+=0.3;
        herobg.style.backgroundPosition = x+"px -" + x + "px";
    }, 10);
}

// img.load(function() {
//   img.addClass("loaded");
// });

window.addEventListener("load", scrollBg)