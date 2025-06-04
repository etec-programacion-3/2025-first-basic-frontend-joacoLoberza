// Ejercicio: pruebas unitarias con Jest

function suma(a, b) {
  return a + b;
}

// EJERCICIO: Implementa la función totalCarrito que reciba un array de productos y devuelva el total
// function totalCarrito(carrito) { ... }

test('suma 2 + 2 es 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('suma -1 + 1 es 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

// EJERCICIO: Agrega tests para totalCarrito
// test('...', () => { ... });
// test('...', () => { ... }); 