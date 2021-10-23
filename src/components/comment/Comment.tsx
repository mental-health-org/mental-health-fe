import React, {useState} from 'react';
import './comment.scss'


const Comment = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState('I am a comment');
  

  const onChange = () => {
   setValue(value);
 };

 const handleSave = () => {
  setIsEditing(false)
 }


  const handleClick = () => {
    setIsEditing(true)
  }
  return (
    <div className='Comment'>
    {!isEditing && (
      <>
      <p>I AM A COMMENT</p>
      <button onClick={() => handleClick()}>EDIT THIS COMMENT</button>
      </>
      )
    }

    {isEditing && 
    (
      <>
    <input type="text" value={value} onChange={onChange} placeholder={value}/>
    <button onClick={() => handleSave() }>Save Comment</button>
    </>)
    }
  
  </div>
    )

}

export default Comment;

