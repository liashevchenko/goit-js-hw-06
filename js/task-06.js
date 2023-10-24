const inputBlur = document.querySelector("#validation-input");

inputBlur.addEventListener("blur", () => {
  if (inputBlur.value.length === parseInt(inputBlur.dataset.length)) {
   validation("valid","invalid");
  } else {
    validation("invalid", "valid");
  }
});
function validation(a, b) {
    inputBlur.classList.add(a);
    inputBlur.classList.remove(b);
}