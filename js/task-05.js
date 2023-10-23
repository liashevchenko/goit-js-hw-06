const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", nameReplacer);

function nameReplacer(event) {
    if (nameInput.value === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = nameInput.value;
    }
}