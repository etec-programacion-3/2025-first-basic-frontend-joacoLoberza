// Importa las funciones del módulo de tareas
import { getTasks, addTask, removeTask } from './tareas.js';

// Referencias a los elementos del DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

// Renderiza la lista de tareas en el DOM
function renderTasks() {
  list.innerHTML = '';
  getTasks().forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task;
    // Botón para eliminar la tarea
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => {
      removeTask(idx); // Elimina la tarea y vuelve a renderizar
      renderTasks();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Maneja el evento submit del formulario para agregar una tarea
form.onsubmit = e => {
  e.preventDefault();
  addTask(input.value); // Agrega la tarea al almacenamiento
  input.value = '';
  renderTasks(); // Actualiza la lista
};

// Render inicial de las tareas
renderTasks(); 