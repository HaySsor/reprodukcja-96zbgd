import './style.css';

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel');
const oryginalCanvas = document.querySelectorAll('.original-canvas .pixel');

const pixelToColor = [];

oryginalCanvas.forEach((pixel, index) => {
  if (pixel.matches('.pixel-dot')) {
    pixelToColor.push(index);
  }
});

fakeCanvas.forEach((pixel, index) => {
  if (pixelToColor.includes(index)) {
    pixel.classList.add('pixel-dot');
  }
});
