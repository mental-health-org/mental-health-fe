import React from 'react'
import '../../styles/UserActionsBox.scss'
import Delete from '../../components/Delete/Delete'

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

  return (
    <div className='UserActionsBox--container'>
      <Delete 
        handleClick={handleDeleteClick}
      />
    </div>
  )
}

export default UserActionsBox;