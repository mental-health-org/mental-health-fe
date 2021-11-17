import React from 'react'
import '../../styles/UserActionsBox.scss'
import Delete from '../../components/Delete/Delete';
// import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {flagQuestion, flagComment} from '../../utils/util'
import FlagModal from '../../components/flagModal/FlagModal'
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react';

/// now that I used a cast I have to say if its empty then account for this condition since you bypassed tyepscript.
// you are here******


interface UserActonsBoxProps {
  delete: (id: number) => void;
  id: number;
  update: () => void;
  updateDeleteStatus: () => void;
  type: string;
}

const UserActionsBox: React.FC<UserActonsBoxProps> = (props) => {
  const { userData } = useContext(UserContext);
  console.log("here is my context here", userData, useContext(UserContext))

  const handleDeleteClick = (event: React.FormEvent) => {
    props.delete(props.id)
    props.update()
    props.updateDeleteStatus()
  }

const packagePost = () => {
//   {
//     "post" : id // is this the id of the post
//     "user" : userData.id
//     "comment" : "bad post" /// this needs to be grabbed from the modal!
// }

// {
//   "response" : id
//   "user" : userData.id
//   "comment" : "bad post"
// }
}



  return (
    <div className='UserActionsBox--container'>
      <Delete 
        handleClick={handleDeleteClick}
      />
      <FlagModal handleFlagClick={handleFlagClick} type={props.type}/>
    </div>
  )
}

export default UserActionsBox;