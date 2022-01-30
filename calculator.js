const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

function updateDisplay() {
// select the element with class of `calculator-screen`
const display = document.querySelector('.calculator-screen');
// update the value of the element with the contents of `displayValue`
display.value = calculator.displayValue;
}

updateDisplay();