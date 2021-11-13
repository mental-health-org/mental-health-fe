import React from 'react'
import '../../styles/UserActionsBox.scss'
import Delete from '../../components/Delete/Delete'

const UserActionsBox: React.FC = () => {
  return (
    <div className='UserActionsBox--container'>
      <Delete />
    </div>
  )
}

export default UserActionsBox;