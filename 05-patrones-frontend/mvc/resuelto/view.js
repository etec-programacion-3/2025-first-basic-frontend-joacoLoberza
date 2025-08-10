// Vista: Se encarga de la presentación y la interacción con el usuario
export class TaskView {
  constructor() {
    // Referencias a los elementos del DOM
    this.list = document.getElementById('task-list');
    this.form = document.getElementById('task-form');
    this.input = document.getElementById('task-input');
  }

  // Renderiza la lista de tareas en el DOM
  render(tasks) {
    this.list.innerHTML = '';
    tasks.forEach((task, idx) => {
      const li = document.createElement('li');
      li.textContent = task;
      // Botón para eliminar la tarea
      const btn = document.createElement('button');
      btn.textContent = 'Eliminar';
      btn.className = 'remove';
      btn.dataset.idx = idx;
      li.appendChild(btn);
      this.list.appendChild(li);
    });
  }

  // Asocia el evento de agregar tarea al formulario
  bindAddTask(handler) {
    this.form.onsubmit = e => {
      e.preventDefault();
      handler(this.input.value); // Llama al controlador con el valor ingresado
      this.input.value = '';
    };
  }

  // Asocia el evento de eliminar tarea a la lista
  bindRemoveTask(handler) {
    this.list.onclick = e => {
      if (e.target.classList.contains('remove')) {
        handler(Number(e.target.dataset.idx)); // Llama al controlador con el índice
      }
    };
  }
} 