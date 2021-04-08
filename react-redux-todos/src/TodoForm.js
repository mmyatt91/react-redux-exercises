import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('')

  function handleSubmit(evt){
    evt.preventDefault();
    addTodo(task);
    setTask('');
  }

  function handleChange(evt){
    setTask(evt.target.value)
  }

  return (
    <div className="todoform-container">
      <h2> To-Do List </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default TodoForm;