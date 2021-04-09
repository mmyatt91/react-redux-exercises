import React, { useState } from "react";

function TodoForm({addTodo}) {
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
    <div>
      <h2> To-Do List </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          name="task"
          onChange={handleChange}
          value={task}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default TodoForm;