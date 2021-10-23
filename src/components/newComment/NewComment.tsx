import {useState} from 'react';

const NewComment = () => {
  const [value, setValue] = useState('');
  

   const onChange = () => {
    setValue(value);
  };

  const handleClick = () => {
    console.log('handleClick')
  }

  return (
    <div className='comment'>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => handleClick()}>Add Comment</button>
    </div>
  )
}

export default NewComment;