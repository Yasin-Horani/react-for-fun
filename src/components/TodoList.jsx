import React, { useState } from "react";
let nextId = 1; // Initialize nextId to 1
function TodoList() {
  const [taskInputValue, setTaskInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (taskInputValue.trim() === "") return;
    setTasks([...tasks, { id: nextId, taskName: taskInputValue }]);
    nextId++;
    setTaskInputValue("");
  }

  function handleInputChange(e) {
    setTaskInputValue(e.target.value);
  }
  function handleDeleteClick(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }
  function handleEditClick(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      const newTaskName = prompt("Edit task name:", taskToEdit.taskName);
      if (newTaskName !== null && newTaskName.trim() !== "") {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, taskName: newTaskName } : task
        );
        setTasks(updatedTasks);
      }
    }
  }

  const tasksList = tasks.map((task) => (
    <React.Fragment key={task.id}>
      <li>
        {task.taskName}
        {"............."}
        <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
        <button onClick={() => handleEditClick(task.id)}>Edit</button>
      </li>
      <hr />
    </React.Fragment>
  ));

  return (
    <div style={{ padding: "20px" }}>
      <h1>add new task</h1>
      <input
        type="text"
        value={taskInputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <hr />
      <div>
        <ol>{tasksList}</ol>
      </div>
    </div>
  );
}

export default TodoList;
