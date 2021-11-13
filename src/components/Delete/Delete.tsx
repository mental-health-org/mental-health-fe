import React from 'react'

// props: 
// delete function that comes from app
// this will be fired on click and pass the ID of the clicked on element into the delete method
// action passed back up and will filter out the questions that do not have the id passed through

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