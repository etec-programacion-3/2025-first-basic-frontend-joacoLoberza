// Ejemplo resuelto de testing con console.assert
// Permite verificar que las funciones devuelvan el resultado esperado

function suma(a, b) {
  return a + b;
}

function totalCarrito(carrito) {
  return carrito.reduce((acc, prod) => acc + prod.precio, 0);
}

// Pruebas de suma
console.assert(suma(2, 2) === 4, '2 + 2 debe ser 4');
console.assert(suma(-1, 1) === 0, '-1 + 1 debe ser 0');

// Pruebas de totalCarrito
console.assert(totalCarrito([{precio: 10}, {precio: 5}]) === 15, 'Total debe ser 15');
console.assert(totalCarrito([]) === 0, 'Total de carrito vacío debe ser 0');

// Puedes agregar más pruebas para practicar 