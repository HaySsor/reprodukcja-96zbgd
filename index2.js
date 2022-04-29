import './style.css';

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelector('.fake-canvas');
const firstRow = fakeCanvas.children[1];
const secondRow = fakeCanvas.children[2];
const threeRow = fakeCanvas.children[3];
const fourRow = fakeCanvas.children[4];
const fiveRow = fakeCanvas.children[5];

firstRow.children[1].classList.add('pixel-dot');
firstRow.children[2].classList.add('pixel-dot');
firstRow.children[3].classList.add('pixel-dot');
firstRow.children[5].classList.add('pixel-dot');
firstRow.children[7].classList.add('pixel-dot');
firstRow.children[9].classList.add('pixel-dot');

secondRow.children[1].classList.add('pixel-dot');
secondRow.children[3].classList.add('pixel-dot');
secondRow.children[5].classList.add('pixel-dot');
secondRow.children[7].classList.add('pixel-dot');
secondRow.children[9].classList.add('pixel-dot');

threeRow.children[1].classList.add('pixel-dot');
threeRow.children[3].classList.add('pixel-dot');
threeRow.children[5].classList.add('pixel-dot');
threeRow.children[6].classList.add('pixel-dot');
threeRow.children[9].classList.add('pixel-dot');

fourRow.children[1].classList.add('pixel-dot');
fourRow.children[3].classList.add('pixel-dot');
fourRow.children[5].classList.add('pixel-dot');
fourRow.children[7].classList.add('pixel-dot');

fiveRow.children[1].classList.add('pixel-dot');
fiveRow.children[2].classList.add('pixel-dot');
fiveRow.children[3].classList.add('pixel-dot');
fiveRow.children[5].classList.add('pixel-dot');
fiveRow.children[7].classList.add('pixel-dot');
fiveRow.children[9].classList.add('pixel-dot');
