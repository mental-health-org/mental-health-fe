import React from 'react'
import edit from '../../images/HeLP_edit.png'
import '../../styles/Edit.scss'

interface EditProps {
  handleClick: (event: React.FormEvent) => void;
}

const Edit:React.FC<EditProps> = (props) => {
  return (
    <button
      className='EditButton--button'
      onClick={(event) => props.handleClick(event)}
    >
      <img 
        className='EditIcon--image'
        src={edit}
        alt='edit icon'
      />
    </button>
  )
}

export default Edit