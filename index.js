 let count = 0;

const display = document.getElementById('number');
const alertMsg = document.getElementById('alert');
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
const btnReset = document.getElementById('reset');

function updateApp() {
    display.innerText = count;

    // Limit at 10
    if (count >= 10) {
        alertMsg.innerText = "Max 10 reached!";
        btnPlus.disabled = true;
    } else {
        btnPlus.disabled = false;
        alertMsg.innerText = "";
    }

    // Limit at 0
    btnMinus.disabled = (count <= 0);
}

btnPlus.onclick = () => {
    if (count < 10) {
        count++;
        updateApp();
    }
};

btnMinus.onclick = () => {
    if (count > 0) {
        count--;
        updateApp();
    }
};

btnReset.onclick = () => {
    count = 0;
    updateApp();
};

// Start the app state
updateApp();
