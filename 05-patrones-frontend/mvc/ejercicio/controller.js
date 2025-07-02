// Controlador: Conecta el modelo y la vista, y gestiona la lógica de la app
import { TaskModel } from './model.js';
import { TaskView } from './view.js';

class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Renderiza la vista inicial con las tareas actuales
    this.view.render(this.model.getTasks());
    // Asocia el evento de agregar tarea
    this.view.bindAddTask(this.handleAddTask);
    // TODO: Asocia los eventos de eliminar y editar tarea
    this.view.bindRemoveTask(this.handleRemoveTask);
    // this.view.bindEditTask(this.handleEditTask);
  }

  // Maneja el evento de agregar tarea
  handleAddTask = task => {
    this.model.addTask(task); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  };

  handleRemoveTask = id  => {
    this.model.removeTask(id);
    this.view.render(this.model.getTasks());
  }

  handleEditTask = (id, newTask) => {
    this.model.editTask(id, newTask);
    this.view.render(this.model.gatTasks());
  };
}

// Instancia el controlador con el modelo y la vista
new TaskController(new TaskModel(), new TaskView()); 