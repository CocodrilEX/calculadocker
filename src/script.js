// /src/script.js

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      const result = eval(display.value); // eval es inseguro, solo para pruebas simples
      if (Number.isFinite(result)) {
        display.value = result;
      } else {
        display.value = 'Error';
      }
    } catch {
      display.value = 'Error';
    }
  }
  
  module.exports = { appendToDisplay, clearDisplay, calculate };
  