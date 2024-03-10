const container = document.getElementsByClassName('container');
const resetBtn = document.getElementsByClassName('resetBtn');

function createGrid(size) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', size);
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}