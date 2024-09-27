function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const button = document.querySelector('button.change-color');
console.log(button);
const color = document.querySelector('.color');
console.log(color);
button.addEventListener('click', handleButton);
function handleButton() {
  console.log('click');
  console.log(getRandomHexColor());
  let colorHex = getRandomHexColor();
  document.body.style.backgroundColor = colorHex;
  color.textContent = colorHex;
}
