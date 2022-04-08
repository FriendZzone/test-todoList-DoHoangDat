import { List, ListItem } from "@mui/material";
import React, { useContext } from "react";
import { TodoContext } from "../../../../context";
import TodoListItem from "../TodoListItem";

function TodoList(props) {
  const { todoList } = useContext(TodoContext);
  return (
    <List>
      {todoList.map((item) => (
        <ListItem key={item.id}>
          <TodoListItem todo={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
