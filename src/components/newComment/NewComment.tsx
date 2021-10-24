import React, {useState} from 'react';
import './newComment.scss'

interface NewCommentProps {
  addComment: ({}) => void | any;
}

const NewComment: React.FC<NewCommentProps> = ({ addComment }) => {
  const [value, setValue] = useState('');
  

  //  const onChange = (event: React.FormEvent) => {
  //   setValue(event.target.value);
  // };

  const handleRespondClick = (event: React.FormEvent) => {
    // console.log('value:', value)
    event.preventDefault()

  }

  return (
    <div className='NewComment--container'>
        <textarea 
          className='RespondTextarea--textarea'
          placeholder='Add text to submit a response...'
          value={value} 
          onChange={event => setValue(event.target.value)} />
        <button 
          className='Respond--button'
          onClick={(event) => handleRespondClick(event)}>Respond</button>
    </div>
  )
}

export default NewComment;