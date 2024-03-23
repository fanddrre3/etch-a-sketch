const container = document.querySelector('.container');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.addEventListener('mouseover', handleHover);
    square.addEventListener('mousedown', handleMouseDown);
    container.appendChild(square);
  }
}

function handleHover(event) {
  event.target.style.backgroundColor = '#aaa'; // Hover color change
}

function handleMouseDown(event) {
  const currentColor = event.target.style.backgroundColor;
  const rgbValues = currentColor.match(/\d+/g); // Extract RGB values
  let red = parseInt(rgbValues[0]);
  let green = parseInt(rgbValues[1]);
  let blue = parseInt(rgbValues[2]);

  // Randomize RGB values
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  // Darken by 10% with each click (max 10 times)
  let opacity = parseFloat(event.target.style.opacity) || 1;
  opacity = Math.max(0.1, opacity - 0.1);

  event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  event.target.style.opacity = opacity;
}

function resetGrid() {
  let size = prompt('Enter the number of squares per side (maximum 100):');
  size = Math.min(100, Math.max(1, parseInt(size))); // Limit size (1-100)
  createGrid(size);
}

createGrid(16); // Initial grid creation

resetButton.addEventListener('click', resetGrid);