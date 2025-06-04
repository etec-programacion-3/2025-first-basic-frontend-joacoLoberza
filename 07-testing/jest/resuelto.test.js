// Ejemplo resuelto de pruebas unitarias con Jest

function suma(a, b) {
  return a + b;
}

function totalCarrito(carrito) {
  return carrito.reduce((acc, prod) => acc + prod.precio, 0);
}

test('suma 2 + 2 es 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('suma -1 + 1 es 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

test('totalCarrito suma los precios', () => {
  expect(totalCarrito([{precio: 10}, {precio: 5}])).toBe(15);
});

test('totalCarrito de carrito vacío es 0', () => {
  expect(totalCarrito([])).toBe(0);
}); 