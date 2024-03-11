const container = document.getElementsById('container');
const resetBtn = document.getElementsById('resetBtn');

function createGrid(size) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', size);
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function handleHover(e) {
    e.target.classList.add('hovered');
}

function resetGrid() {
    let newSize = parseInt(prompt('Enter the number of squares perside (max 100)'));
    newSize = Math.min(Math.max(1, newSize), 100);
    createGrid(newSize);
}

container.addEventListener('mouseover', handleHover);
resetBtn.addEventListener('click', resetGrid);

createGrid(16);