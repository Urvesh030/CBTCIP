

let currentInput = '';
let currentOperator = '';

function addnumber(num) {
  currentInput += num;
  document.getElementById('result').value = currentInput;
}

function addoperator(operator) {
  currentOperator = operator;
  currentInput += operator;
  document.getElementById('result').value = currentInput;
}

function clearInput() {
  currentInput = '';
  currentOperator = '';
  document.getElementById('result').value = '';
}

function calculate() {
  if (currentOperator && currentInput !== '') {
    const result = eval(currentInput);
    document.getElementById('result').value = result;
    currentInput = result.toString();
    currentOperator = '';
  }
}
