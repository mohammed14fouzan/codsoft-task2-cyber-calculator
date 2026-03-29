const display = document.getElementById('display');


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === "") {
            display.value = "Error";
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
}


const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

window.addEventListener('keydown', (event) => {

    for (let i = 0; i < keys.length; i++) {
        if (event.key === keys[i]) {
            if (event.key === 'Enter') {
                calculate();
            } else if (event.key === 'Backspace') {
                deleteLast();
            } else {
                appendToDisplay(event.key);
            }
        }
    }
});