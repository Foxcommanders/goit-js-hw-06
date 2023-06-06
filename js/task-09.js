const changeColor = document.querySelector('.change-color');
const curColor = document.querySelector('.color');

changeColor.addEventListener('click', handleChangeColor);

function handleChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  curColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
