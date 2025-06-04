// Componente Tarjeta: genera un elemento visual para mostrar información
// Recibe un objeto con 'titulo' y 'contenido' y retorna un elemento div
export function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  // Estructura de la tarjeta con título y contenido
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
} 