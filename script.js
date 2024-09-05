const layers = document.querySelectorAll(".layer");
const palette = [
    '#a7d8b5', '#f59f01', '#f1a0b5', '#ffeb54', '#a2acd8',
    '#e87f75', '#edd6d4', '#2ac670', '#f3f19b', '#4173b1',
    '#00969f', '#e26b52', '#ebdca8', '#aedbd3', '#6ba7b8',
    '#0085ff', '#ff6869', '#80a7af', '#81c7ff', '#f93d00',
    '#ababab', '#eaedeb', '#2f00fd', '#e0621f', '#8c67a8',
    '#51ff01', '#ff0074', '#75f8ff', '#51ff01', '#ff9d8f',
    '#f57134', '#0042ff', '#000000'
];

function applyColors() {
    for (let i = 0; i < layers.length; i++) {
        layers[i].style.background = palette[i];
        const path = layers[i].querySelector("path");
        if (path) {
            path.style.fill = palette[i + 2];
        }
    }
}

function shuffleColours(array) {
    return array.sort(() => Math.random() - 0.5);
}

document.addEventListener("mousedown", function() {
    applyColors();  
    shuffleColours(palette);
});

document.addEventListener("mousemove", function(mouse) {
    createPolygons(mouse.clientX, mouse.clientY);
});

function createPolygons(mouseX, mouseY) {
    layers[0].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 0 20vh, 0 0, 20vw 0)`;
    layers[1].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 20vw 0, 50vw 0)`;
    layers[2].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 50vw 0, 100vw 0, 100vw 10vh)`;
    layers[3].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 100vw 10vh, 100vw 90vh)`;
    layers[4].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 100vw 90vh, 100vw 100vh, 95vw 100vh)`;
    layers[5].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 95vw 100vh, 50vw 100vh)`;
    layers[6].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 50vw 100vh, 20vw 100vh)`;
    layers[7].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 20vw 100vh, 0 100vh, 0 20vh)`;
}

window.addEventListener("DOMContentLoaded", function() {
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    createPolygons(initialX, initialY);
    applyColors(); 
});