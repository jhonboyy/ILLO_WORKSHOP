let layers = document.querySelectorAll(".layer")
let palette = ['#60014C','#FE32C5','#FF5D33','#268549','#0011A8','#04A5FF','#9FF944','#3347FF','#32FE5F','#75FFB8','#FF82E3','#F42E25','#6630FF','#FAFF00','#FF7415']

for (let i=0;i<layers.length;i++){
        
    layers[i].style.background = palette[i];
    layers[i].querySelector("path").style.fill = palette[i+2];
}

document.addEventListener("mousedown", function(){

    shuffle(palette);

    for (let i=0;i<layers.length;i++){
        
        layers[i].style.background = palette[i];
        layers[i].querySelector("path").style.fill = palette[i+2];
    }

})

document.addEventListener("mousemove", function(e){
    let mouseX = e.clientX; let mouseY = e.clientY;
    layers[0].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 0 ${map(mouseY, 0, window.innerHeight, 45, 20)}vh, 0 0, ${map(mouseX, 0, window.innerWidth, 45, 5)}vw 0)`;
    layers[1].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${map(mouseX, 0, window.innerWidth, 45, 5)}vw 0, ${map(mouseX, 0, window.innerWidth, 80, 50)}vw 0)`;
    layers[2].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${map(mouseX, 0, window.innerWidth, 80, 50)}vw 0, 100vw 0, 100vw ${map(mouseY, 0, window.innerHeight, 40, 10)}vh)`;
    layers[3].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 100vw ${map(mouseY, 0, window.innerHeight, 40, 10)}vh, 100vw ${map(mouseY, 0, window.innerHeight, 40, 90)}vh)`;
    layers[4].style.clipPath = `polygon(${mouseX}px ${mouseY}px, 100vw ${map(mouseY, 0, window.innerHeight, 40, 90)}vh, 100vw 100vh, ${map(mouseX, 0, window.innerWidth, 60, 95)}vw 100vh)`;
    layers[5].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${map(mouseX, 0, window.innerWidth, 60, 95)}vw 100vh, ${map(mouseX, 0, window.innerWidth, 50, 20)}vw 100vh)`;
    layers[6].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${map(mouseX, 0, window.innerWidth, 50, 20)}vw 100vh, ${map(mouseX, 0, window.innerWidth, 15, 5)}vw 100vh)`;
    layers[7].style.clipPath = `polygon(${mouseX}px ${mouseY}px, ${map(mouseX, 0, window.innerWidth, 15, 5)}vw 100vh, 0 100vh, 0 ${map(mouseY, 0, window.innerHeight, 45, 20)}vh)`
})


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}