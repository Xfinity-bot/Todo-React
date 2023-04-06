import { Paper, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const AddForm = (props) => {
  const [open, setOpen] = useState(false);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const [title, setTitle] = useState("");

  const handleValidity = (e) => {
   setTitle(e.target.value);
  };

  const handleAdd = (e) => {
    let data = { title: title };
    console.log(data);

    axios
      .post("http://localhost:8080/tasks/addTask", data)
      .then((res) => {
        console.log(res);
        setOpen((prev)=>!prev);
        props.updated((prev)=>!prev)
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(props.close());
  };

  return (
    <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Successfull 
  </Alert>
</Snackbar>
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
};

export default AddForm;
