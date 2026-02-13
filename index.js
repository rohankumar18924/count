 let count = 0;

function increase() {
    if (count < 10) {
        count++;
        document.getElementById("count").innerText = count;
    }
}

function decrease() {
    if (count > 0) {
        count--;
        document.getElementById("count").innerText = count;
    }
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}
