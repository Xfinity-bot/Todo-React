import { Paper, TextField, Button } from "@mui/material";
import React, { forwardRef, useState } from "react";
import axios from "axios";

const AddForm = forwardRef((props, refs) => {
  const [title, setTitle] = useState("");

  const handleValidity = (e) => {
    //console.log(e.createdDate)

    setTitle(e.target.value);
  };

  const handleAdd = (e) => {
    let data = { title: title };
    console.log(data);

    axios
      .post("http://localhost:8080/tasks/addTask", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(props.close());
  };

  return (
    <>
      <Paper
        sx={{
          width: "300px",
          position: "relative",
          top: "50%",
          left: "50%",
          padding: "20px",
          display: "flex",
          transform: "translate(-50%,-50%)",
          flexDirection: "column",
        }}
      >
        <TextField
          id="outlined-basic"
          onChange={handleValidity}
          label="Task Title"
          variant="outlined"
          value={title}
        />

        <Button
          sx={{ marginTop: "20px" }}
          onClick={handleAdd}
          disabled={!title}
          variant="contained"
        >
          Add
        </Button>
      </Paper>
    </>
  );
});

export default AddForm;
