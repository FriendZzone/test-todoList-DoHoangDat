import ClearIcon from "@mui/icons-material/Clear";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { delTodo } from "../../../../constants";
import { TodoContext } from "../../../../context";
import TodoInput from "../TodoInput";
function TodoListItem({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [editTodo, setEditTodo] = useState(false);

  const handleDeleteTodo = () => {
    dispatch(delTodo({ id: todo.id }));
  };
  const handleEditTodo = () => {
    setEditTodo(true);
  };
  return editTodo ? (
    <TodoInput todo={todo} setEditTodo={setEditTodo} dispatch={dispatch} />
  ) : (
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
      <Typography variant="h6" component="span">
        {todo.title}
      </Typography>
      <Box>
        <Button
          sx={{ minWidth: "17px", padding: 0 }}
          color="inherit"
          size="small"
          onClick={handleEditTodo}
        >
          <FormatColorFillIcon />
        </Button>
        <Button
          sx={{ minWidth: "17px", padding: 0, marginLeft: "17px" }}
          size="small"
          color="inherit"
          onClick={handleDeleteTodo}
        >
          <ClearIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default TodoListItem;
