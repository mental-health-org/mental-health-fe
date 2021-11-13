import React from 'react'

// props: 
// delete function that comes from app
// this will be fired on click and pass the ID of the clicked on element into the delete method
// action passed back up and will filter out the questions that do not have the id passed through

interface DeleteProps {
  delete: (id: number) => void
}

const Delete:React.FC = () => {
  return (
    <button>Delete</button>
  )
}

export default Delete