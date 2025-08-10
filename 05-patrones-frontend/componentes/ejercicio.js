// Componente Tarjeta: genera un elemento visual para mostrar información
function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
}

// Componente rehutilizable del formulario
function Formulario({ onSubmit }) {
  const form = document.createElement('form');
  form.classList.add('form');
  form.innerHTML = `
  <label for="formTitle">Title:<label/>
  <input type="text" placeholder="Información..." id="formTitle" required/>
  <label for="formData">Data:<label/>
  <input type="text" placeholder="Información..." id="formData" required/>
  <button type="submit" class="formSubmit">Add</button>
  `
  form.onsubmit = e => {
    e.preventDefault()
    const title = document.querySelector('#formTitle');
    const data = document.querySelector('#formData')
    onSubmit({titulo:title.value, contenido:data.value})
  }
  return form
}

// Montaje de componentes en la página
const app = document.getElementById('app');

// Función que "instancia" la tarjeta
function mostrarTarjeta(dato) {
  const tarjet = Tarjeta(dato);
  console.log("Creando")
  app.appendChild(tarjet)
}

// Monta el formulario en la página y pásale la función mostrarTarjeta como callback
  app.appendChild(Formulario({ onSubmit: mostrarTarjeta })); 