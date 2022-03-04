const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
const minDimension = Math.min(screenHeight, screenWidth);
const squareSide = (minDimension - 100) / 16;
console.log(squareSide);

const grid = document.querySelector('.grid');

let square = document.createElement('div');
square.style.width = `${squareSide}px`;
square.style.height = `${squareSide}px`;
square.style.border = '2px solid pink';
square.style.boxSizing = 'border-box';

grid.appendChild(square);
