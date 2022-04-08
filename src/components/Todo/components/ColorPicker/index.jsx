import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const colorOptions = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "pink",
  "purple",
];
function ColorPicker({ todoColor, setTodoColor }) {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Color</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={todoColor}
        label="Color"
        onChange={(e) => setTodoColor(e.target.value)}
      >
        {colorOptions.map((item) => (
          <MenuItem key={item} sx={{ color: item }} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ColorPicker;
