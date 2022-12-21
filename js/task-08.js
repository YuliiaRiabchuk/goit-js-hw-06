const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  //   console.dir(evt.currentTarget.elements.password);

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Заповни будь ласка всі поля форми!");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  }
  evt.currentTarget.reset();

  //   console.log(email.value);
  //   console.log(password.value);
}
