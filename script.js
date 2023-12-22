let display = document.getElementById('display-num');

function Display(value) {
    display.value += value;
}

function clear_Display() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
