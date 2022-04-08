import React from "react";
import { Box, Typography } from "@mui/material";
import TodoInput from "./components";
import TodoList from "./components/TodoList";
function Todo(props) {
  return (
    <Box
      width="453px"
      backgroundColor="#fff"
      margin="122px auto 0 auto"
      borderRadius="15px"
    >
      <Typography
        sx={{ paddingTop: "15px" }}
        variant="h6"
        fontWeight="bold"
        align="center"
      >
        Todo List
      </Typography>
      <TodoInput />
      <TodoList />
    </Box>
  );
}

export default Todo;
