// Vista: Se encarga de la presentación y la interacción con el usuario
import { editForm } from "./components/editForm";
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
      li.dataset.id = idx;
      const remove = document.createElement('button');
      remove.textContent = 'Eliminar';
      remove.classList.add('remove');
      li.appendChild(remove);
      const edit = document.createElement('button');
      edit.textContent = 'Editar';
      edit.classList.add('edit');
      li.appendChild(edit);
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

  // TODO: Asocia el evento de eliminar tarea a la lista
  bindRemoveTask(handler) {
    this.list.addEventListener('click', e => {
      e.preventDefault()
      if (e.target.matches('button.remove')) {
        handler(e.target.parentElement.dataset.id,)
      }
    })
  }

  // TODO: Asocia el evento de editar tarea a la lista
  bindEditTask(handler) {
    this.list.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.matches('button.edit')) {
        form = new editForm();
        li = e.target.parentElement;
        li.textContent = '';
        li.insertAdjacentElement('beforebegin', form.newForm())
        submitBtn = li.firstElementChild.lastElementChild;
        submitBtn.onclick = 
      }
    })
  }
} 