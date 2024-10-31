let display = document.querySelector('.calculator-screen');
let memory = 0;
let currentValue = '';
let operator = null;
let waitingForSecondValue = false;

const updateDisplay = (value) => {
    display.value = value;
};

const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(currentValue);

    if (waitingForSecondValue && operator) {
        operator = nextOperator;
        updateDisplay(`${memory} ${nextOperator}`);
        return;
    }

    if (operator) {
        if (operator === '+') {
            memory += inputValue;
        } else if (operator === '-') {
            memory -= inputValue;
        } else if (operator === '*') {
            memory *= inputValue;
        } else if (operator === '/') {
            if (inputValue !== 0) {
                memory /= inputValue;
            } else {
                alert("Cannot divide by zero!");
                return;
            }
        }
    } else {
        memory = inputValue;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
    currentValue = '';
    updateDisplay(`${memory} ${nextOperator}`);
};

document.querySelector('.calculator-keys').addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) return;

    const value = target.value;

    if (target.classList.contains('operator')) {
        if (currentValue !== '') {
            handleOperator(value);
        }
        return;
    }

    if (target.classList.contains('decimal')) {
        if (!currentValue.includes('.')) {
            currentValue += '.';
            updateDisplay(currentValue);
        }
        return;
    }

    if (target.classList.contains('all-clear')) {
        memory = 0;
        currentValue = '';
        operator = null;
        waitingForSecondValue = false;
        updateDisplay(0);
        return;
    }

    if (target.classList.contains('equal-sign')) {
        // Final calculation
        handleOperator(operator);
        operator = null; // Clear operator after calculation
        waitingForSecondValue = false;
        return;
    }

    if (target.classList.contains('square')) {
        if (currentValue) {
            currentValue = parseFloat(currentValue);
            updateDisplay(currentValue ** 2);
            currentValue = display.value.toString();
        }
        return;
    }

    if (target.classList.contains('square-root')) {
        if (currentValue) {
            currentValue = parseFloat(currentValue);
            updateDisplay(Math.sqrt(currentValue));
            currentValue = display.value.toString();
        }
        return;
    }

    if (target.classList.contains('memory-add')) {
        memory += parseFloat(currentValue) || 0;
        return;
    }

    if (target.classList.contains('memory-subtract')) {
        memory -= parseFloat(currentValue) || 0;
        return;
    }

    if (target.classList.contains('memory-recall')) {
        updateDisplay(memory);
        currentValue = memory.toString();
        return;
    }

    if (target.classList.contains('toggle-sign')) {
        if (currentValue) {
            currentValue = (parseFloat(currentValue) * -1).toString();
            updateDisplay(currentValue);
        }
        return;
    }

    // Handle number input
    if (!isNaN(value)) {
        if (waitingForSecondValue) {
            currentValue = value;
            waitingForSecondValue = false;
        } else {
            currentValue = currentValue === '' ? value : currentValue + value;
        }
        updateDisplay(currentValue);
    }
});
