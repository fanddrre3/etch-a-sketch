function createGrid() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    const gridSize = prompt('Enter number of squares per side (max 100):');
    const squareSize = 100 /gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('.div');
        square.classList.add('square');
        square.style.width = squareSize + '%';
        square.style.backgroundColor = '#fff';
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}