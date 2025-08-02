import dayjs from 'dayjs';

const ahora = dayjs();
const p = document.createElement('p');
p.textContent = ahora;
document.body.appendChild(p);
// Puedes ejecutar este archivo con Vite y ver el resultado en el navegador
