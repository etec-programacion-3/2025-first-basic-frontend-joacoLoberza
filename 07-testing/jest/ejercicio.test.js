// Ejercicio: pruebas unitarias con Jest

function suma(a, b) {
  return a + b;
}
function totalCarrito(carrito) {
  let total = 0;
  carrito.forEach(num => {
    total+=num;
  })
  return total
}

test('suma 2 + 2 es 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('suma -1 + 1 es 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

test('suma 1040 + 89 es 1129', () => {
  expect(totalCarrito([1040, 89])).toBe(1129) //Prueba que se acierta
});
test('suma 90 + 13 es 100', () => {
  expecy(totalCarrito([90,13])).toBe(100) //Prueba que falla
}); 