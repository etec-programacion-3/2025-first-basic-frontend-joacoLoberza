// Ejemplo de testing con console.assert
// Permite verificar que las funciones devuelvan el resultado esperado

// Función simple de suma para probar
function suma(a, b) {
  return a + b;
}

// Pruebas: si la condición es falsa, se muestra el mensaje de error
console.assert(suma(2, 2) === 4, '2 + 2 debe ser 4');
console.assert(suma(-1, 1) === 0, '-1 + 1 debe ser 0');
// Ejercicio: agrega más pruebas aquí para practicar 