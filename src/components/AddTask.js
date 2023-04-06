import { Modal,Box,Typography, Fab ,Paper} from '@mui/material'
import React from 'react'
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import AddForm from './AddForm';
const AddTask = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Fab color="primary" aria-label="add" id='bottomTodo' onClick={handleOpen}>
    <AddIcon  />
  </Fab>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
          <AddForm close={handleClose}/>
          
      </Modal>
      </>
  )
}

export default AddTask