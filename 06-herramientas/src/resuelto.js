// Ejemplo resuelto: uso de una dependencia (dayjs) y formateo automático
import dayjs from 'dayjs';

// Muestra la fecha y hora actual formateada
const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
document.body.innerHTML = `<h1>Fecha y hora actual (con dayjs):</h1><p>${now}</p>`;

// Puedes ejecutar este archivo con Vite y ver el resultado en el navegador
