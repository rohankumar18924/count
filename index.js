 let count = 0;
const MAX_LIMIT = 10;

// Selecting elements
const display = document.getElementById('counter-value');
const message = document.getElementById('limit-msg');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Function to update the screen
function updateDisplay() {
    display.innerText = count;

    // Check if we hit the limit of 10
    if (count >= MAX_LIMIT) {
        message.innerText = "Limit Reached (10)";
        incBtn.disabled = true;
    } else {
        message.innerText = "";
        incBtn.disabled = false;
    }

    // Optional: disable decrement if at 0
    decBtn.disabled = (count <= 0);
}

// Event Listeners
incBtn.addEventListener('click', () => {
    if (count < MAX_LIMIT) count++;
    updateDisplay();
});

decBtn.addEventListener('click', () => {
    if (count > 0) count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initialize the UI on load
updateDisplay();
