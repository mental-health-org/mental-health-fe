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

  const handleRespondClick = () => {
    // console.log('value:', value)
  }

  return (
    <div className='NewComment--container'>
        <textarea 
          className='RespondTextarea--textarea'
          value={value} 
          onChange={event => setValue(event.target.value)} />
        <button 
          className='Respond--button'
          onClick={() => handleRespondClick()}>Respond</button>
    </div>
  )
}

export default NewComment;