const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

console.log(span);

input.addEventListener("input", onInput);

function onInput(evt) {
  const query = evt.currentTarget.value;

  if (!query) {
    span.textContent = "Anonymous";
  } else {
    span.textContent = query;
  }
  console.log(query);
}
