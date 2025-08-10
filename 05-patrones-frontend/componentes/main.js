// Importa los componentes Tarjeta y Formulario
import { Tarjeta } from './tarjeta.js';
import { Formulario } from './formulario.js';

// Selecciona el contenedor principal donde se montarán los componentes
const app = document.getElementById('app');

// Función que se ejecuta cuando se envía el formulario
// Crea y agrega una nueva tarjeta al DOM con el dato recibido
const mostrarTarjeta = dato => {
  app.appendChild(Tarjeta({ titulo: 'Dato enviado', contenido: dato }));
};

// Monta el formulario en la página y le pasa la función de callback
app.appendChild(Formulario({ onSubmit: mostrarTarjeta })); 