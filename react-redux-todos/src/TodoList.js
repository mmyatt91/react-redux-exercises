import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function TodoList() {
  const todos = useSelector(st => st.todos);
  const dispatch = useDispatch();

  const handleAdd = (task) => dispatch({ type: "ADD_TODO", task });
  const handleRemove = (id) => dispatch({ type: "REMOVE_TODO", id });

  const allTodos = todos.map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      removeTodo={handleRemove}
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

