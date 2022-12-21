const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const symbValue = input.getAttribute("data-length");
  if (input.value.length === Number(symbValue)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }

  console.log(input.value.length);
}
