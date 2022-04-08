import {
  ADD_TODO,
  DEL_TODO,
  EDIT_TODO_COLOR,
  EDIT_TODO_TITLE,
} from "../constants";

export const initialState = [
  {
    id: 1,
    title: "todo 1",
    color: "pink",
  },
  {
    id: 2,
    title: "todo 2",
    color: "green",
  },
  {
    id: 3,
    title: "todo 3",
    color: "red",
  },
  {
    id: 4,
    title: "todo 4",
    color: "yellow",
  },
];
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case EDIT_TODO_TITLE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        } else {
          return todo;
        }
      });

    case EDIT_TODO_COLOR:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, color: action.payload.color };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
