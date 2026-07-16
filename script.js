
 let display = document.getElementById('display');

// Display mein number ya operator jodna
function appendToDisplay(input) {
    display.value += input;
}

// Full screen saaf karna (C button)
function clearDisplay() {
    display.value = "";
}

// Backspace (Ek number hatana)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Add, Subtract, Multiply aur Divide karne ke liye math logic
function calculate() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // 1.5 second baad screen khud saaf ho jayegi
    }
}