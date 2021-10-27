import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../styles/SubmissionModal.scss'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const submitStyle = {
  color: '#DA0064',
  border: 'solid #DA0064 4px',
  borderRadius: 0,
  height: '50px',
  width: '125px',
  backgroundColor: 'transparent'
};

const backStyle = {
  color: 'white',
  border: 'none',
  height: '50px',
  width: '125px',
  bgcolor: '#14CDD4',
  borderRadius: 0
}

interface DeleteModalProps {
  handleSubmit: (event: React.FormEvent) => void;
}

 const DeleteModal: React.FC<DeleteModalProps> = ({ handleSubmit }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={submitStyle}
        onClick={handleOpen}
      >Delete My Post</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you would like to delete this post? 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            There is no way to recover deleted posts or details related to post after deletion. 
          </Typography>
          <Button sx={backStyle} onClick={event => handleClose()}>Cancel</Button>
          <Button sx={submitStyle} onClick={event => handleSubmit(event)}>Delete</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteModal