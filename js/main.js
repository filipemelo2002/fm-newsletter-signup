const form = document.querySelector("form");
const input = form.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!input.value) {
    input.required = true;
  }

})

input.addEventListener("keyup", () => {
  input.required = true;
})

input.addEventListener("blur", () => {
  if (!input.value) {
    input.required = false;
  }
})