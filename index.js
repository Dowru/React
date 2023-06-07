import React, { useState } from "react";

// Componente TaskItem que representa una tarea individual
const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </span>
      <button onClick={() => onToggle(task.id)}>Completada</button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

// Componente TaskList que muestra todas las tareas
const TaskList = () => {
  const [tasks, setTasks] = useState([]); // Estado para almacenar la lista de tareas
  const [newTask, setNewTask] = useState(""); // Estado para almacenar la nueva tarea ingresada

  // Función para agregar una nueva tarea
const addTask = () => {
    if (newTask.trim() !== "") {
    const newTaskItem = {
        id: Date.now(),
        title: newTask,
        completed: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask("");
    }
};

  // Función para marcar una tarea como completada
const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
    if (task.id === taskId) {
        return { ...task, completed: !task.completed };
        }
        return task;
    });

    setTasks(updatedTasks);
};

  // Función para eliminar una tarea
const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
};

return (
    <div>
        <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
    />
    <button onClick={addTask}>Agregar tarea</button>

    {tasks.map((task) => (
        <TaskItem
        key={task.id}
        task={task}
        onToggle={toggleTask}
            onDelete={deleteTask}
        />
        ))}
    </div>
    );
};

// Componente principal de la aplicación
const App = () => {
    return (
    <div>
        <h1>Lista de Tareas</h1>
        <TaskList />
    </div>
    );
};

export default App;
