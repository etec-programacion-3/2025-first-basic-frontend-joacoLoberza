// Componente Formulario: genera un formulario reutilizable
// Recibe un objeto con un callback 'onSubmit' que se ejecuta al enviar el formulario
export function Formulario({ onSubmit }) {
  const form = document.createElement('form');
  // Estructura del formulario con un input y un botón
  form.innerHTML = `
    <input type="text" name="dato" placeholder="Dato" required />
    <button type="submit">Enviar</button>
  `;
  // Maneja el evento submit y llama al callback con el dato ingresado
  form.onsubmit = e => {
    e.preventDefault();
    const dato = form.dato.value;
    onSubmit(dato);
    form.reset();
  };
  return form;
} 