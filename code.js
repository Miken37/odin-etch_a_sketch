function boxCreate (){
    let box = document.createElement("div");
    box.classList.add('boxes');
    containerGrid.appendChild(box);
    box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px; background: white`);
}
function gridSwap(){
    let totalBoxes = 64;       
    let boxes = Math.sqrt(totalBoxes);
    let squareSize = 1024 / boxes;      //TOTAL size

    return totalBoxes;
}
function gridSize(){
    let boxSize = 128;       
    return boxSize;
}

function randomColour(){
    for (let i = 0; i < boxClass.length; i++){                      // LOOPS through every item in the nodelist and applies the event listener to EVERY one
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let boxColor = `rgb(${red}, ${blue}, ${green})`;
        boxClass[i].addEventListener("pointerover", () => boxClass[i].setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px; background: ${boxColor}`));
    }
}

function changeToDefault(){
    for (let i = 0; i < boxClass.length; i++){                      // LOOPS through every item in the nodelist and applies the event listener to EVERY one
        boxClass[i].addEventListener("pointerover", () => boxClass[i].setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px; background: gray`));
    }
}

function eraser(){
    for (let i = 0; i < boxClass.length; i++){                      // LOOPS through every item in the nodelist and applies the event listener to EVERY one
        boxClass[i].addEventListener("pointerover", () => boxClass[i].setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px; background: white`));
    }
}

const containerGrid = document.querySelector(".container-grid");

/*
       Size----Total Boxes
8x8   = 128 px----  64
16x16 = 64 px ----  256
32x32 = 16 px ----  1024
*/

let totalBoxes = gridSwap();
let boxSize = gridSize();
console.log(`Total boxes: ${totalBoxes}`);
console.log(`Box Size: ${boxSize}px`);

for (let i = 0; i<totalBoxes; i++){
    boxCreate();
}

let boxClass = document.querySelectorAll("div.boxes");          //Makes a nodelist of EVERY div with the .boxes class
for (let i = 0; i < boxClass.length; i++){                      // LOOPS through every item in the nodelist and applies the event listener to EVERY one
    boxClass[i].addEventListener("pointerover", () => boxClass[i].setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px; background: gray`));
}

let defaultChoice = document.querySelector(".default");
defaultChoice.addEventListener("click", () => {changeToDefault()});

let randomChoice = document.querySelector(".rgb");
randomChoice.addEventListener("click", () => {randomColour()});

let eraserButton = document.querySelector(".eraser");
eraserButton.addEventListener("click", () => {eraser()});

const grid8 = document.querySelector(".grid");
grid8.addEventListener("click", () => {gridSwap()});


let resetButton = document.querySelector(".resetB");
resetButton.addEventListener("click", () => {location.reload()});

let colourButton = document.querySelector(".colourSelect");
colourButton.addEventListener("click", () => {boxClass.setAttribute('value', "#000000")})