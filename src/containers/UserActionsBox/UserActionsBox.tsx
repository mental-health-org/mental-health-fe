import React from 'react'
import '../../styles/UserActionsBox.scss'
import {flagQuestion, flagComment} from '../../utils/util'
import FlagModal from '../../components/flagModal/FlagModal'
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react';
import Delete from '../../components/Delete/Delete'
import Edit from '../../components/Edit/Edit'

interface UserActonsBoxProps {
  editAction: () => void;
  deleteAction: (id: number) => void;
  id: number;
  update: () => void;
  type: string;
  updateStatus: () => void;
  datasOwnerDetails: any;
}

const UserActionsBox: React.FC<UserActonsBoxProps> = (props) => {
  const { userData } = useContext(UserContext);

  const handleDeleteClick = (event: React.FormEvent) => {
    props.deleteAction(props.id)
    props.update()
    props.updateStatus()
  }

  const handleEditClick = (event: React.FormEvent) => {
    props.editAction()
  }

  const packagePost = (type: string, comment: string) => {
    if (type === "question") {
      return {
        "post": props.id, 
        "user": userData.id,
        "comment": comment 
      }
    } else if (type === "comment") {
      return {
        "response": props.id,
        "user": userData.id,
        "comment": comment
      }
    }
  }

  const handleFlagClick = (event: React.FormEvent, comment: string ) => {
    event.preventDefault()
    if(window.confirm('Are you sure that you want to flag this item?')) {
      const postObject = packagePost("question", comment)
      if (props.type === "question") {
        flagQuestion(postObject)
        .catch(err => console.log("err", err))
      } else if (props.type === "comment") {
        flagComment(postObject).then(data => console.log("flagQuestionData", data))
        .catch(err => console.log("err", err))
      }
    }
  }

  return (
    <div className='UserActionsBox--container'>
      {userData.username === props.datasOwnerDetails.user.username && <Edit 
        handleClick={handleEditClick}
      /> }
      {userData.username === props.datasOwnerDetails.user.username && <Delete 
        handleClick={handleDeleteClick}
      /> }
      <FlagModal handleFlagClick={handleFlagClick} type={props.type}/>
    </div>
  )
}

export default UserActionsBox;