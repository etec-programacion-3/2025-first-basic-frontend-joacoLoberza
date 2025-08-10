export function calcularTotal(carrito) {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
  
  const carrito = [
    { nombre: "Mouse", precio: 1000, cantidad: 2 },
    { nombre: "Teclado", precio: 1500, cantidad: 1 },
  ];
  
  let total = calcularTotal(carrito)
  console.log('El carrito total es:', total);

  console.assert(total === 3, 'ERROR: No se esperaba ese valor...')
  