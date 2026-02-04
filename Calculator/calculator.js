function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate(operation, num1, num2) {
    switch (operation) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operation";
    }
}

// Calculator UI Logic
let display = document.getElementById("display");
let currentValue = "";
let previousValue = "";
let operation = null;

// Get all number/operator buttons
document.querySelectorAll(".btn[data-value]").forEach(button => {
    button.addEventListener("click", function() {
        const value = this.getAttribute("data-value");
        
        if (["+", "-", "*", "/"].includes(value)) {
            if (currentValue) {
                previousValue = currentValue;
                operation = value;
                currentValue = "";
            }
        } else {
            currentValue += value;
        }
        
        display.value = currentValue || previousValue || "";
    });
});

// Equals button
document.getElementById("equals").addEventListener("click", function() {
    if (previousValue && currentValue && operation) {
        const result = calculate(operation, parseFloat(previousValue), parseFloat(currentValue));
        display.value = result;
        currentValue = String(result);
        previousValue = "";
        operation = null;
    }
});

// Clear button
document.getElementById("clear").addEventListener("click", function() {
    currentValue = "";
    previousValue = "";
    operation = null;
    display.value = "";
});

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculate
};

