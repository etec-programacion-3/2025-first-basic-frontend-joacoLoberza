export class TaskView {
  constructor() {
    this.list = document.getElementById('task-list');
    this.form = document.getElementById('task-form');
    this.input = document.getElementById('task-input');
  }

  render(tasks) {
    this.list.innerHTML = '';
    tasks.forEach((task, idx) => {
      const li = document.createElement('li');
      li.textContent = task;
      const btn = document.createElement('button');
      btn.textContent = 'Eliminar';
      btn.className = 'remove';
      btn.dataset.idx = idx;
      li.appendChild(btn);
      this.list.appendChild(li);
    });
  }

  bindAddTask(handler) {
    this.form.onsubmit = e => {
      e.preventDefault();
      handler(this.input.value);
      this.input.value = '';
    };
  }

  bindRemoveTask(handler) {
    this.list.onclick = e => {
      if (e.target.classList.contains('remove')) {
        handler(Number(e.target.dataset.idx));
      }
    };
  }
} 