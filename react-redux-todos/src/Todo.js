import React from "react";

function Todo({id, task, removeTodo}) {
  function handleRemove(){
    removeTodo(id);
  }
  return (
    <div>
      <li>{task}</li>
      <button onClick={handleRemove}>
        X
      </button>
    </div>
  )
}

export default Todo;