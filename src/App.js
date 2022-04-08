import React, { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { TodoContext } from "./context";
import { initialState, todoReducer } from "./reducers";
function App() {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todoList, dispatch }}>
      <div className="App">
        <Header />
        <Todo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
