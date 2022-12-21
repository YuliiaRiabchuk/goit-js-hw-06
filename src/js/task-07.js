const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(input);
console.dir(text);

input.addEventListener("input", onInput);

function onInput() {
  text.style.fontSize = input.value + "px";

  console.log(input.value);
}
