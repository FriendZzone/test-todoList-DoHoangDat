import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../../constants";
import { TodoContext } from "../../../context";
import ColorPicker from "./ColorPicker";
function TodoInput(props) {
  const { dispatch } = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoColor, setTodoColor] = useState("blue");
  const handleAddTodo = () => {
    dispatch(addTodo({ id: uuid(), title: todoTitle, color: todoColor }));
  };
  return (
    <Box display="flex" margin="0" padding="30px 20px" position="relative">
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Add a Todo
        </InputLabel>
        <OutlinedInput
          sx={{ height: "70px" }}
          id="outlined-adornment-password"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <ColorPicker
                  todoColor={todoColor}
                  setTodoColor={setTodoColor}
                />
              </IconButton>
            </InputAdornment>
          }
          label="Add a Todo"
        />
      </FormControl>

      <Button onClick={handleAddTodo} variant="contained" sx={{}}>
        Add
      </Button>
    </Box>
  );
}

export default TodoInput;
