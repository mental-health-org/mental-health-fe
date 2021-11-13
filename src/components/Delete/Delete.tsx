import React from 'react'

interface DeleteProps {
  handleClick: (event: React.FormEvent) => void;
}

const Delete:React.FC<DeleteProps> = (props) => {
  return (
    <button
      className='DeleteButton--button'
      onClick={(event) => props.handleClick(event)}
    >Delete</button>
  )
}

export default Delete