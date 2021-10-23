import {useState} from 'react';
import './newComment.scss'

const NewComment = () => {
  const [value, setValue] = useState('');
  

   const onChange = () => {
    setValue(value);
  };

  const handleClick = () => {
    console.log('handleClick')
  }

  return (
    <div className='NewComment'>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => handleClick()}>Add New Comment</button>
    </div>
  )
}

export default NewComment;