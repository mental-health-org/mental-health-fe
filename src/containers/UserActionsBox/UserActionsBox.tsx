import React from 'react'
import '../../styles/UserActionsBox.scss'
import Delete from '../../components/Delete/Delete';
import {flagQuestion, flagComment} from '../../utils/util'
import FlagModal from '../../components/flagModal/FlagModal'
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react';

interface UserActonsBoxProps {
  delete: (id: number) => void;
  id: number;
  update: () => void;
  updateDeleteStatus: () => void;
  type: string;
}

const UserActionsBox: React.FC<UserActonsBoxProps> = (props) => {
  const { userData } = useContext(UserContext);

  const handleDeleteClick = (event: React.FormEvent) => {
    props.delete(props.id)
    props.update()
    props.updateDeleteStatus()
  }

const packagePost = (type: string, comment: string) => {
if(type === "question") {
  return {
    "post": props.id, 
    "user": userData.id,
    "comment": comment 
  }
} else if(type === "comment")
  return {
    "response" : props.id,
    "user" : userData.id,
    "comment" : comment
  }
}

  const handleFlagClick = (event: React.FormEvent, comment: string ) => {
    event.preventDefault()
    const postObject = packagePost("question", comment)
    if (props.type === "question") {
      flagQuestion(postObject).then(data => console.log(data))
      .catch(err => console.log("err", err))
    } else if (props.type === "comment") {
      flagComment(postObject).then(data => console.log(data))
      .catch(err => console.log("err", err))
    }
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