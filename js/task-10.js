function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.querySelector('#controls');
const boxesDiv = document.querySelector('#boxes');

const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const input = controlsDiv.querySelector('input');

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  const divs = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = color;

    divs.push(div);
  }

  boxesDiv.append(...divs);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
