import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../styles/SubmissionModal.scss'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './flagModal.scss';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const submitStyle = {
  color: '#DA0064',
  // border: 'solid #DA0064 4px',
  borderRadius: 0,
  height: '50px',
  // width: '125px',
  backgroundColor: 'transparent'
};

const backStyle = {
  color: 'white',
  border: 'none',
  height: '50px',
  width: '125px',
  bgcolor: '#14CDD4',
  borderRadius: 0,
}


interface FlagModalProps {
  handleFlagClick: (event: React.FormEvent, comment: string) => void;
  type: string;
}

 const FlagModal: React.FC<FlagModalProps> = ({ handleFlagClick, type }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openGuidelinesWindow = () => {
    window.open('https://mental-health-fe.herokuapp.com/#/community-guidelines', '_blank');
  }

  const handleSubmit = (event: React.MouseEvent) => {
    // To Do: this is constantly rerendering.
    handleClose();
    handleFlagClick(event, comment);
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setComment(event.target.value)
  }

  return (
    <div className="FlagModal--container">
      <Button
        id='Submit-Button'
        sx={submitStyle}
        onClick={handleOpen}
        // disabled={disabled}
      ><ReportProblemIcon className="ReportProblemIcon"/></Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='ModalText--container'>
            <Typography id="modal-modal-title" variant="h6" component="h2"> Visit our 
              <button className="communityGuidelines--btn" onClick={() => openGuidelinesWindow()}>community guidelines page</button> <OpenInNewIcon />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              I am flagging this {type} for the following reason.
            </Typography>
          </div>
          <div className="flag-comment--div">
              <input className="flag-comment--input" onChange={(event)=> handleChange(event)}></input>
          </div>
          <div className='ModalButtons--container'>
          <Button sx={backStyle} onClick={event => handleClose()}>Cancel</Button>
          <Button id='Modal-Submit' sx={submitStyle} onClick={event => handleSubmit(event)}>Submit Flag</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default FlagModal


