// Componente Tarjeta: genera un elemento visual para mostrar información
export function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
}

// Componente Formulario: genera un formulario reutilizable
export function Formulario({ onSubmit }) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" name="dato" placeholder="Dato" required />
    <button type="submit">Enviar</button>
  `;
  form.onsubmit = e => {
    e.preventDefault();
    const dato = form.dato.value;
    onSubmit(dato);
    form.reset();
  };
  return form;
}

// Montaje de componentes en la página
const app = document.getElementById('app');

const mostrarTarjeta = dato => {
  app.appendChild(Tarjeta({ titulo: 'Dato enviado', contenido: dato }));
};

app.appendChild(Formulario({ onSubmit: mostrarTarjeta })); 