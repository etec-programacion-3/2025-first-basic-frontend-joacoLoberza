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
      //Botón logica eliminar tarea:
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('deleteBtn');
      deleteBtn.textContent = 'Eliminar';
      li.insertAdjacentElement('beforeend',deleteBtn);
      //Botón logica editar tarea
      const editBtn = document.createElement('button');
      editBtn.classList.add('editBtn');
      editBtn.textContent = 'Editar';
      li.insertAdjacentElement('beforeend', editBtn)
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

  // Evento de eleminar tarea asociado.
  bindRemoveTask(handler) {
    const deleteBtns = [...document.querySelectorAll('.deleteBtn')]
    deleteBtns.forEach((btn,idx) => {
      btn.onclick = e => {
        e.preventDefault();
        handler(idx); //Llama al controlador con el indice de lo que hay que borrar.
      }
    })
  }

  // Asocia el evento de editar tarea a la lista
  bindEditTask(handler) {
    const editBtns = [...document.querySelectorAll('.editBtn')];
    editBtns.forEach((btn, idx) => {
      btn.onclick = e => {
        const li = btn.parentElement
        li.innerHTML = `
        <form>
          <input type="text" class="editInput" placeholder="Editar..." required/>
          <button type="submit">Listo</button>
        </form>
        `
        li.firstElementChild.onsubmit = e => {
          e.preventDefault();
          handler(idx, li.firstElementChild.firstElementChild.value)
        }
      }
    })
  }
} 