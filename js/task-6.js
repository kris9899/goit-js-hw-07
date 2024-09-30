function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const elementCountInput = document.getElementById('elementCount');
const boxesContainer = document.getElementById('boxes');
const INITIAL_SIZE = 30;

createButton.addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  const numberOfBoxes = parseInt(input.value);

  if (numberOfBoxes > 0 && numberOfBoxes <= 100) {
    boxesContainer.innerHTML = '';
    const boxes = Array.from({ length: numberOfBoxes }, (_, i) => {
      const size = INITIAL_SIZE + i * 10;
      return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    }).join('');

    boxesContainer.innerHTML = boxes;
  }

  if (input.value !== '') {
    input.value = '';
  }
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});
