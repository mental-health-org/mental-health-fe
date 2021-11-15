import React from 'react'

interface EditProps {
  handleClick: (event: React.FormEvent) => void;
}

const Edit:React.FC<EditProps> = (props) => {
  return (
    <button
      className='EditButton--button'
      onClick={(event) => props.handleClick(event)}
    >Edit</button>
  )
}

export default Edit