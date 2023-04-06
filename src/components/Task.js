import { Paper, Button, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = ({ data, deleteFunc, updateFunc }) => {
  return (
    <div>
      <Paper
        variant="outlined"
        key={Task._id}
        sx={{
          width: "70%",
          margin: "0 auto",
          display: " flex",
          justifyContent: "space-around",
          padding: "25px",
        }}
      >
        <Checkbox
          checked={data.isCompleted}
          onClick={() => updateFunc(data._id, data.isCompleted)}
        />
        <p className={data.isCompleted===true?'striked':''}>{data.title}</p>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => deleteFunc(data._id)}
        >
          delete
        </Button>
      </Paper>
    </div>
  );
};

export default Task;
