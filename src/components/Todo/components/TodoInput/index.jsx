import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { editTodoColor, editTodoTitle } from "../../../../constants";
import ColorPicker from "../ColorPicker";
function TodoInput({ todo, setEditTodo, dispatch }) {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoColor, setTodoColor] = useState(todo.title);

  const handleEditTodo = () => {
    dispatch(editTodoTitle({ id: todo.id, title: todoTitle }));
    dispatch(editTodoColor({ id: todo.id, color: todoColor }));
    setEditTodo(false);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="60px"
      backgroundColor={todo.color}
      padding="0 14px"
      borderRadius="15px"
      color="#fff"
    >
      <TextField
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <Box display="flex" flexWrap="nowrap">
        <Button
          sx={{ minWidth: "17px", padding: 0 }}
          color="inherit"
          size="small"
        >
          <ColorPicker todoColor={todoColor} setTodoColor={setTodoColor} />
        </Button>
        <Button
          sx={{ minWidth: "17px", padding: 1, marginLeft: "17px" }}
          size="small"
          variant="contained"
          onClick={handleEditTodo}
        >
          update
        </Button>
      </Box>
    </Box>
  );
}

export default TodoInput;
