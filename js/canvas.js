// Created and modified from https://stackoverflow.com/questions/44934221/html5-canvas-with-freehand-line-drawing
// and https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse

// canvas id + context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

// line style
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = '#000';


let isDrawing = false;
let lastX = 0;
let lastY = 0;

// listen for mouse click on canvas, 
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// listen for mouse on canvas
canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
});

// listen to mouse up on canvas
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

// listen for mouse leave canvas
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

// listen for clear button
document.getElementById('clear-btn').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// listen for save button
document.getElementById('save-btn').addEventListener('click', () => {
  // save canvas drawing to local storage
  localStorage.setItem('drawing', canvas.toDataURL());

  alert('Drawing saved!');
});

// check if drawing if saved previously
const savedDrawing = localStorage.getItem('drawing');
if (savedDrawing) {
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
  img.src = savedDrawing;
}