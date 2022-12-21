const widget = document.querySelector(".widget");
const span = document.querySelector(".color");
const btnChangeClr = document.querySelector(".change-color");

console.log(widget);

btnChangeClr.addEventListener("click", onClickBtn);

function onClickBtn() {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
