import { use, useState } from "react";

function TodoList() {
  const [taskInputValue, setTaskInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const tasksList = tasks.map((task) => {
    return <li>{task}</li>;
  });

  function handleAddTask() {
    setTasks([...tasks, taskInputValue]);
    setTaskInputValue("");
  }

  return (
    <div>
      <h1>add new task</h1>
      <input
        type="text"
        value={taskInputValue}
        onChange={(e) => {
          setTaskInputValue(e.target.value);
        }}
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
