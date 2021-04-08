import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function TodoList() {
  const todos = useSelector(st => st.todos);
  const dispatch = useDispatch();

  const handleAdd = (task) => dispatch({ type: "ADD_TODO", task });
  const handleRemove = (id) => dispatch({ type: "REMOVE_TODO", id });

  const allTodos = todos.map(t => (
    <Todo
      key={t.id}
      id={t.id}
      task={t.task}
      remove={handleRemove}
    />
  ));

  return (
    <div>
      <TodoForm addTodo={handleAdd} />
      <ul>{allTodos}</ul>
    </div>
  );
}

export default TodoList;

