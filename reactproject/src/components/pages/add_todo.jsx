import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useId } from "react";
import { addTodo } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  let dispatch = useDispatch();
  let [title, settitle] = useState("");

  return (
    <>
      <TextField
        onChange={(e) => {
          settitle(e.target.value);
        }}
        label="Task Name"
        id="outlined-size-small"
        size="small"
      />
      <Button
        onClick={() => {
          let obj = {
            id: 12,
            title,
          };

          dispatch(addTodo(obj));
        }}
        variant="outlined"
      >
        Add
      </Button>
    </>
  );
}

export default AddTodo;