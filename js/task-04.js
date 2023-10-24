const spanCounter =  document.querySelector("#value")
let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    spanCounter.textContent = counterValue;
});

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
    if (counterValue > 0) {
        counterValue -= 1;
       spanCounter.textContent = counterValue;
    }
});