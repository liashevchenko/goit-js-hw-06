let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
});

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
    if (counterValue > 0) {
        counterValue -= 1;
        document.querySelector("#value").textContent = counterValue;
    }
});