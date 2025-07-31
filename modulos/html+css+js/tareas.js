var tareas = ["tarea 1", "tarea 2", "tarea 3", "tarea 4", "tarea 5"];

function agregarTarea(tarea) {
  tareas.push(tarea);
}

function borrarTareas() {
  tareas = [];
}

function obtenerTareas() {
  return tareas;
}
