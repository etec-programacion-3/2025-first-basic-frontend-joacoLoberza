// Importa las funciones del módulo de tareas
import { getTasks, addTask, removeTask, editTask } from './tareas.js';

// Referencias a los elementos del DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

//Editar una tarea de la lista
function editTasks(li, edit) {
  const editForm = document.createElement('form')
  const input = document.createElement('input')
  const submit = document.createElement('input')
  input.type = "text";
  submit.type = "submit";
  let text = li.textContent;
  input.value = text;
  li.textContent = "";
  editForm.appendChild(submit)
  editForm.appendChild(input)
  li.insertAdjacentElement('afterbegin', editForm)
  edit.remove()

  editForm.onsubmit = e => {
    e.preventDefault()
    editTask(text, input.value)
    renderTasks()
  }
}

// Renderiza la lista de tareas en el DOM
function renderTasks() {
  list.innerHTML = '';
  getTasks().forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task;
    // TODO: Agrega aquí el botón y la lógica para editar la tarea
    // TODO: Agrega aquí la lógica para filtrar tareas completadas/pendientes
    // Botón para eliminar la tarea
    const btn = document.createElement('button');
    const edit = document.createElement('button');
    edit.textContent = 'Editar';
    edit.onclick = () => {
      editTasks(edit.parentElement, edit)
    }
    btn.textContent = 'Eliminar';
    btn.onclick = () => {
      removeTask(idx);
      renderTasks();
    };
    li.appendChild(btn);
    li.appendChild(edit)
    list.appendChild(li);
  });
}

// Maneja el evento submit del formulario para agregar una tarea
form.onsubmit = e => {
  e.preventDefault();
  addTask(input.value);
  input.value = '';
  renderTasks();
};

// Render inicial de las tareas
renderTasks(); 