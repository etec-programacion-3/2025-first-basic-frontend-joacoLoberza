// Ejemplo de pruebas unitarias con Jest
// Para ejecutar: npm install && npm test (dentro de la carpeta jest)

// Función a probar
function suma(a, b) {
  return a + b;
}

// Test: verifica que suma(2, 2) devuelve 4
// Si la condición falla, Jest lo reporta como error
// Puedes agregar más tests para practicar

test('suma 2 + 2 es 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('suma -1 + 1 es 0', () => {
  expect(suma(-1, 1)).toBe(0);
}); 