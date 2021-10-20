import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState<boolean>(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Submit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Does your question follow community, ethical, and confidentialty guidelines?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            If so, click submit. If not, please click the edit button and rephrase your question to follow our community standards. 
          </Typography>
          <button onClick={event => handleClose()}>Edit</button>
          
          <Link to='/whatnow'>
          <button>Submit</button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}