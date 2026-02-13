let count = 0;
const counterDisplay = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {

    let interval = setInterval(function() {
        count++;
        counterDisplay.textContent = count;

        if (count === 10) {
            clearInterval(interval); // Stop at 10
        }

    }, 1000); // 1 second delay
});
