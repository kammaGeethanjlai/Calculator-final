let currentDisplay = '';

function ToDisplay(value) {
  currentDisplay += value;
  document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  document.querySelector('#display').value = '';
}

function calculate() {
  try {
    let result = eval(currentDisplay);
    currentDisplay = result.toString();
    document.querySelector('#display').value = currentDisplay;
  } catch (e) {
    document.querySelector('#display').value = 'Error';
    currentDisplay = '';
  }
}
