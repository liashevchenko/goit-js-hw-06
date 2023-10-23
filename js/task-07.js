const inputRange = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputRange.addEventListener("input", () => {
  textElement.style.fontSize = inputRange.value + "px";
});