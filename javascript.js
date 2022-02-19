// JavaScript file for etch-a-sketch

function makeBlocks(gridNum) {
    let container = document.querySelector('#container');
    container.innerHTML = '';
    for (i=0; i<gridNum; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (j=0; j<gridNum; j++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }
        
        container.appendChild(row);
    }
}
let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    let gridNum = prompt("Please provide the number of squares on each side, to a maximum of 100");
    while (gridNum >100 || gridNum <1) {
        gridNum=prompt('Please choose a number between 1 to 100');
    }
    makeBlocks(gridNum);
    let blocks = document.querySelectorAll('.box');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.setAttribute('style', 'background: green');
        })
    })
})




