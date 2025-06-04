export class TaskModel {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('mvc-tasks')) || [];
  }

  getTasks() {
    return [...this.tasks];
  }

  addTask(task) {
    this.tasks.push(task);
    this._commit();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this._commit();
  }

  _commit() {
    localStorage.setItem('mvc-tasks', JSON.stringify(this.tasks));
  }
} 