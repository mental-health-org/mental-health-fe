import React from 'react'
import '../../styles/UserActionsBox.scss'
import Delete from '../../components/Delete/Delete'

interface UserActonsBoxProps {
  delete: (id: number) => void;
  id: number;
}

const UserActionsBox: React.FC<UserActonsBoxProps> = (props) => {
  return (
    <div className='UserActionsBox--container'>
      <Delete 
        delete={props.delete}
        id={props.id} 
      />
    </div>
  )
}

export default UserActionsBox;