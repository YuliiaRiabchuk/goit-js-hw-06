const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
const decrementBtn = counter.firstElementChild;
const incrementtBtn = counter.lastElementChild;

console.log(decrementBtn);

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrClick);

function onDecrClick() {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log(counterValue);
}

incrementtBtn.addEventListener("click", onIcremClick);

function onIcremClick() {
  counterValue += 1;
  value.textContent = counterValue;
  console.log(counterValue);
}
