import React from 'react'
import '../../styles/UserActionsBox.scss'
import Delete from '../../components/Delete/Delete'
import Edit from '../../components/Edit/Edit'

interface UserActonsBoxProps {
  delete: (id: number) => void;
  id: number;
  update: () => void;
  updateDeleteStatus: () => void;
}

const UserActionsBox: React.FC<UserActonsBoxProps> = (props) => {

  const handleDeleteClick = (event: React.FormEvent) => {
    props.delete(props.id)
    props.update()
    props.updateDeleteStatus()
  }

  const handleEditClick = (event: React.FormEvent) => {
    console.log('edit engaged')
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