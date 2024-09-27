const input = document.querySelector('#name-input');
console.log(input);
const text = document.querySelector('#name-output');
console.log(text);

const handleInput = () => {
  const inputValue = input.value.trim();
  if (inputValue) {
    text.textContent = `${inputValue}`;
  } else {
    text.textContent = 'Anonymous';
  }
};
input.addEventListener('input', handleInput);
