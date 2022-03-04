const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
const minDimension = Math.min(screenHeight, screenWidth);

const sizeSlider = document.querySelector('#sizeSlider');
const grid = document.querySelector('.grid');

let gridSize = 32;

// Slider value changed
sizeSlider.addEventListener('mouseup', (event) => {
  gridSize = event.target.value;
  redoGrid(gridSize);
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', redoGrid);

// Clears the grid element and creates another
function redoGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createGrid(gridSize);
}

// Creates the appropriate sized grid with empty squares
function createGrid(size) {
  const squareSide = (minDimension - 150) / size;
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    grid.appendChild(row);
    for (let j = 0; j < size; j++) {
      let square = document.createElement('div');
      square.style.width = `${squareSide}px`;
      square.style.height = `${squareSide}px`;
      square.style.border = '1px solid #E8EBED';
      square.style.boxSizing = 'border-box';
      square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = '#7C77B9';
      });
      row.appendChild(square);
    }
  }
}

// Starter grid
createGrid(32);
