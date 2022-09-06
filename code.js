function boxCreate (){
    let box = document.createElement("div");
    box.classList.add('boxes');
    containerGrid.appendChild(box);
    box.setAttribute('style', `width: ${boxWidth}px; height: ${boxHeight}px; background: gray`);
}

const containerGrid = document.querySelector(".container-grid");

let totalBoxes = 64;       
let boxes = Math.sqrt(totalBoxes);
let squareSize = 1024 / boxes;      //TOTAL size

let boxSize = 128;       
let boxWidth = boxSize;
let boxHeight = boxSize;

/*
       Size----Total Boxes
8x8   = 128----  64
16x16 = 64 ----  256
32x32 = 16 ----  1024
*/


for (let i = 0; i<totalBoxes; i++){
    boxCreate();
}

let boxClass = document.querySelectorAll("div.boxes");          //Makes a nodelist of EVERY div with the .boxes class

for (let i = 0; i < boxClass.length; i++){                      // LOOPS through every item in the nodelist and applies the event listener to EVERY one
    boxClass[i].addEventListener("pointerover", () => boxClass[i].setAttribute('style', `width: ${boxWidth}px; height: ${boxHeight}px; background: white`));
}



