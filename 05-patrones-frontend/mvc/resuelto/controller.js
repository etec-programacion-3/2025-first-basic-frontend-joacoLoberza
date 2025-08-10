// Controlador: Conecta el modelo y la vista, y gestiona la lógica de la app
import { TaskModel } from './model.js';
import { TaskView } from './view.js';

class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Renderiza la vista inicial con las tareas actuales
    this.view.render(this.model.getTasks());
    // Asocia los eventos de la vista a los métodos del controlador
    this.view.bindAddTask(this.handleAddTask);
    this.view.bindRemoveTask(this.handleRemoveTask);
  }

  // Maneja el evento de agregar tarea
  handleAddTask = task => {
    this.model.addTask(task); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  };

  // Maneja el evento de eliminar tarea
  handleRemoveTask = idx => {
    this.model.removeTask(idx); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  };
}

// Instancia el controlador con el modelo y la vista
new TaskController(new TaskModel(), new TaskView()); 