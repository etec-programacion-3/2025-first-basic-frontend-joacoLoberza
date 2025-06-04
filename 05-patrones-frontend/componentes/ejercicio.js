// Componente Tarjeta: genera un elemento visual para mostrar información
export function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
}

// EJERCICIO: Completa el componente Formulario para que sea reutilizable
// export function Formulario({ onSubmit }) { ... }

// Montaje de componentes en la página
const app = document.getElementById('app');

// EJERCICIO: Crea una función mostrarTarjeta que reciba un dato y agregue una tarjeta al DOM
// function mostrarTarjeta(dato) { ... }

// EJERCICIO: Monta el formulario en la página y pásale la función mostrarTarjeta como callback
// app.appendChild(Formulario({ onSubmit: mostrarTarjeta })); 