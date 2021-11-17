import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../styles/SubmissionModal.scss'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './flagModal.scss';
import {Link} from 'react-router-dom';

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
  handleFlagClick: (event: React.FormEvent) => void;
  // handleSubmit: (event: React.FormEvent) => void;
  type: string;
}

 const FlagModal: React.FC<FlagModalProps> = ({ handleFlagClick, type }) => {
  const [open, setOpen] = useState<boolean>(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const disabled = (title === '')

  const openGuidelinesWindow = () => {
    window.open('https://mental-health-fe.herokuapp.com/#/community-guidelines', '_blank');
  }

  return (
    <div className="FlagModal--container">
      <Button
        // id='Submit-Button'
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
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default FlagModal

///FLAG LOGIC
//import ReportProblemIcon from '@mui/icons-material/ReportProblem';
  // this should work once deployed
  // const openGuidelinesWindow = () => {
  //   window.open('https://mental-health-fe.herokuapp.com/community-guidelines', '_blank');
  // }

      // {/* <button onClick={() => openGuidelinesWindow()} className="reportProblem--btn">
      //   <ReportProblemIcon className="ReportProblemIcon"/>
      //   </button> */}
