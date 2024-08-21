// pruebas/script.test.js

// Importar el script desde el archivo fuente
const script = require('../src/script.js');

beforeEach(() => {
  // Cargar el contenido HTML en el DOM antes de cada prueba
  document.body.innerHTML = `
    <input id="display" type="text" readonly>
    <button id="button1">1</button>
    <button id="buttonPlus">+</button>
    <button id="buttonEquals">=</button>
  `;

  // Asignar el elemento 'display' del DOM
  display = document.getElementById('display');
});

// Ejemplos de pruebas
test('should append value to display', () => {
  script.appendToDisplay('5');
  script.appendToDisplay('+');
  expect(display.value).toBe('5+');
});

test('should clear display', () => {
  script.appendToDisplay('5');
  script.appendToDisplay('+');
  script.clearDisplay();
  expect(display.value).toBe('');
});

test('should calculate the result', () => {
  script.appendToDisplay('5');
  script.appendToDisplay('+');
  script.appendToDisplay('3');
  script.calculate();
  expect(display.value).toBe('8');
});

test('should handle invalid expressions', () => {
  script.appendToDisplay('5');
  script.appendToDisplay('/');
  script.appendToDisplay('0');
  script.calculate();
  expect(display.value).toBe('Error');
});
