const inputBlur = document.querySelector("#validation-input");

inputBlur.addEventListener("blur", () => {
  if (inputBlur.value.length === parseInt(inputBlur.dataset.length)) {
    inputBlur.classList.add("valid");
    inputBlur.classList.remove("invalid");
  } else {
    inputBlur.classList.add("invalid");
    inputBlur.classList.remove("valid");
  }
});