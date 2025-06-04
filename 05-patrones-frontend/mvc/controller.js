import { TaskModel } from './model.js';
import { TaskView } from './view.js';

class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.render(this.model.getTasks());
    this.view.bindAddTask(this.handleAddTask);
    this.view.bindRemoveTask(this.handleRemoveTask);
  }

  handleAddTask = task => {
    this.model.addTask(task);
    this.view.render(this.model.getTasks());
  };

  handleRemoveTask = idx => {
    this.model.removeTask(idx);
    this.view.render(this.model.getTasks());
  };
}

new TaskController(new TaskModel(), new TaskView()); 