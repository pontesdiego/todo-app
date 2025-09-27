import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [task, setTask] = useState(""); // input value
  const [tasks, setTasks] = useState([]); // list of tasks

  // Add new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // clear input
    }
  };

  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ To-Do List</h1>

      {/* Input */}
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {t}{" "}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
