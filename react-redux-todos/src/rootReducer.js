import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  todos: []
};

function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [
        ...state.todos, {task: action.task, id: uuidv4()}
      ]}
  }
  if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.id)
    };
  }
  return state;
}

export default rootReducer;