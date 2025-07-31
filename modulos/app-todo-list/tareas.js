let tareas = ["tarea 1", "tarea 2", "tarea 3"];

export function agregarTarea(tarea) {
  tareas.push(tarea);
}

export function borrarTareas() {
  tareas = [];
}

export function obtenerTareas() {
  return tareas;
}
