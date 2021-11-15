import React from 'react'
import '../../styles/UserActionsBox.scss'
import Delete from '../../components/Delete/Delete'
import Edit from '../../components/Edit/Edit'

interface UserActonsBoxProps {
  editAction: () => void;
  deleteAction: (id: number) => void;
  id: number;
  update: () => void;
  updateStatus: () => void;
}

const UserActionsBox: React.FC<UserActonsBoxProps> = (props) => {

  const handleDeleteClick = (event: React.FormEvent) => {
    props.deleteAction(props.id)
    props.update()
    props.updateStatus()
  }

  const handleEditClick = (event: React.FormEvent) => {
    props.editAction()
  }

  return (
    <div className='UserActionsBox--container'>
      <Edit 
        handleClick={handleEditClick}
      />
      <Delete 
        handleClick={handleDeleteClick}
      />
    </div>
  )
}

export default UserActionsBox;