import React, {useState} from 'react';
import './newComment.scss'

const NewComment = () => {
  const [value, setValue] = useState('');
  

  //  const onChange = (event: React.FormEvent) => {
  //   setValue(event.target.value);
  // };

  const handleClick = () => {
    console.log('handleClick')
  }

  return (
    <div className='NewComment--container'>
        <textarea 
          className='RespondTextarea--textarea'
          value={value} 
          onChange={event => setValue(event.target.value)} />
        <button 
          className='Respond--button'
          onClick={() => handleClick()}>Respond</button>
    </div>
  )
}

export default NewComment;