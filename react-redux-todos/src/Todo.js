import React from "react";

function Todo({id, removeTodo}) {
  function handleRemove(){
    removeTodo(id);
  }
  return (
    <div>
      <button onClick={handleRemove}>
        X
      </button>
    </div>
  )
}

export default Todo;