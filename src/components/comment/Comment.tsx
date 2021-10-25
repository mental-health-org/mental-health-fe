import React, {useState} from 'react';
import './comment.scss'
import { Response } from '../../interfaces';

interface CommentProps {
  responseText: Response;
}

const Comment: React.FC<CommentProps> = ({ responseText }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [value, setValue] = useState('');
  

//   const onChange = () => {
//    setValue(value);
//  };

//  const handleSave = () => {
//   setIsEditing(false)
//  }

//   const handleClick = () => {
//     setIsEditing(true)
//   }

  return (
    <div className='Comment--container'>
    {!isEditing && (
      <>
        <p className='CommentText--p'>{responseText.body}</p>
        {/* <button onClick={() => handleClick()}>EDIT THIS COMMENT</button> */}
      </>
      )
    }

    {/* {isEditing && 
    (
      <>
    <input type="text" value={value} onChange={onChange} placeholder={value}/>
    <button onClick={() => handleSave() }>Save Comment</button>
    </>)
    } */}
  
  </div>
    )

}

export default Comment;

