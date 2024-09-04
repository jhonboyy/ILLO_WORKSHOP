const layers = document.querySelectorAll(".layer");
const palette = [
    '#a7d8b5', '#f59f01', '#f1a0b5', '#ffeb54', '#a2acd8',
    '#e87f75', '#edd6d4', '#2ac670', '#f3f19b', '#4173b1',
    '#00969f', '#e26b52', '#ebdca8', '#aba57b', '#aedbd3',
    '#6ba7b8', '#0085ff', '#ff6869', '#80a7af', '#81c7ff',
    '#f93d00', '#ababab', '#eaedeb', '#2f00fd', '#e0621f',
    '#8c67a8', '#51ff01', '#ff0074', '#75f8ff', '#51ff01',
    '#ff9d8f', '#f57134', '#0042ff', '#000000'
];

for (let i = 0; i < layers.length; i++) {
    layers[i].style.background = palette[i];
    layers[i].querySelector("path").style.fill = palette[i + 2];
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [ 
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
};

document.addEventListener("mousedown", function () {

    shuffle(palette);
    for (let i = 0; i < layers.length; i++) {
        layers[i].style.background = palette[i];
        layers[i].querySelector("path").style.fill = palette[i + 2];
    }
    
});

document.addEventListener("mousemove", function(mouse) {
    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const scaleX = (low, high) => `${(low + (high - low) * mouseX / windowWidth)}vw`;
    const scaleY = (low, high) => `${(low + (high - low) * mouseY / windowHeight)}vh`;

    layers[0].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 0 ${scaleY(45, 20)}, 0 0, ${scaleX(45, 5)} 0)`;
    layers[1].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${scaleX(45, 5)} 0, ${scaleX(80, 50)} 0)`;
    layers[2].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${scaleX(80, 50)} 0, 100vw 0, 100vw ${scaleY(40, 10)})`;
    layers[3].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 100vw ${scaleY(40, 10)}, 100vw ${scaleY(40, 90)})`;
    layers[4].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 100vw ${scaleY(40, 90)}, 100vw 100vh, ${scaleX(60, 95)} 100vh)`;
    layers[5].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${scaleX(60, 95)} 100vh, ${scaleX(50, 20)} 100vh)`;
    layers[6].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${scaleX(50, 20)} 100vh, ${scaleX(15, 5)} 100vh)`;
    layers[7].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${scaleX(15, 5)} 100vh, 0 100vh, 0 ${scaleY(45, 20)})`;
});