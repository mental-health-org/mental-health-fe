import React from 'react';
import HeLP_delete1 from '../../images/HeLP_delete1.png';
import '../../styles/Delete.scss'

interface DeleteProps {
  handleClick: (event: React.FormEvent) => void;
}

const Delete:React.FC<DeleteProps> = (props) => {
  return (
    <button
      className='DeleteButton--button'
      onClick={(event) => props.handleClick(event)}
    ><img className='DeleteIcon--image' src={HeLP_delete1} alt="delete icon" />
    </button>
  )
}

export default Delete