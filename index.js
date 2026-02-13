let count = 0;
const MIN = 0;
const MAX = 10;

const display = document.getElementById('counter-value');
const message = document.getElementById('status-message');
const incBtn = document.getElementById('btn-increment');
const decBtn = document.getElementById('btn-decrement');
const resetBtn = document.getElementById('btn-reset');

function updateUI() {
    display.innerText = count;

    // Handle Maximum Limit (10)
    if (count >= MAX) {
        message.innerText = "Maximum limit (10) reached!";
        incBtn.disabled = true;
    } else {
        incBtn.disabled = false;
    }

    // Handle Minimum Limit (0)
    if (count <= MIN) {
        decBtn.disabled = true;
    } else {
        decBtn.disabled = false;
        if (count < MAX) message.innerText = ""; // Clear message if back in range
    }
}

incBtn.addEventListener('click', () => {
    if (count < MAX) {
        count++;
        updateUI();
    }
});

decBtn.addEventListener('click', () => {
    if (count > MIN) {
        count--;
        updateUI();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    message.innerText = "";
    updateUI();
});

// Initialize UI state on page load
updateUI();
