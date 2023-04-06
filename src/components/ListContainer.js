import { Box, Stack, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./Task";

const ListContainer = () => {
  const [tasks, setTask] = useState({});
  const [updated, setUpdated] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/tasks/deleteTask/${id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    setUpdated((curr) => !curr);
  };
  const handleUpdate = (id, status) => {
    axios
      .put(`http://localhost:8080/tasks/updateTask/${id}`, {
        isCompleted: !status,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setUpdated((curr) => !curr);
  };
  useEffect(() => {
    axios.get("http://localhost:8080/tasks/all").then((res) => {
      let tempTask = res.data;
      setTask(res.data);
      setLoaded(true);
      console.log(res.data);
    });
  }, [updated]);

  if (isLoaded == false) {
    return <div>Loading</div>;
  } else {
    return (
      <Stack spacing={2} sx={{ marginTop: " 10vh" }}>
        {tasks.map((task) => (
          <Task
            key={task._id}
            data={task}
            updateFunc={handleUpdate}
            deleteFunc={handleDelete}
          />
        ))}
      </Stack>
    );
  }
};

export default ListContainer;
