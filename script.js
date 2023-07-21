document.addEventListener('wheel', (e) => {
    if (document.body.classList.contains('no-scroll')) {
        e.preventDefault();
    }
}, { passive: false });

var css = document.createElement("style");
css.innerHTML=".ytp-fullerscreen-edu-button { display: none !important; } ytd-app{scrollbar-width: none;overflow: hidden;}";
document.head.appendChild(css);