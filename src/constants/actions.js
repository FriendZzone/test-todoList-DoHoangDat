export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

export const EDIT_TODO_TITLE = "EDIT_TODO_TITLE";
export const EDIT_TODO_COLOR = "EDIT_TODO_COLOR";
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const delTodo = (payload) => ({
  type: DEL_TODO,
  payload,
});
export const editTodoTitle = (payload) => ({
  type: EDIT_TODO_TITLE,
  payload,
});
export const editTodoColor = (payload) => ({
  type: EDIT_TODO_COLOR,
  payload,
});
