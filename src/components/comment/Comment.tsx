import React, {useState} from 'react';
import './comment.scss'
import { Response } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';
import UpVote from '../UpVote/UpVote'
import DownVote from '../DownVote/DownVote'
import {QuestionDetailsObject} from '../../interfaces';

interface CommentProps {
  responseText: Response;
  questionDownVote: (event: React.FormEvent) => void;
  questionUpVote: (event: React.FormEvent) => void;
  details: QuestionDetailsObject;
}

const Comment: React.FC<CommentProps> = ({ responseText, questionUpVote, questionDownVote, details }) => {
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
      <div className='UserNameAndDate--container'>
      {(<span className="user--span"><PersonIcon id='User-Icon'/><p className="detail person-title"> {responseText.user && <p>{responseText.user.title}</p>}</p></span>)}
        <p>From: {responseText['created_at'].slice(0,10)}</p>
      </div>
        
        <p className='CommentText--p'>{responseText.body}</p>
        <div className='CommentVoteBox--container'>
          <UpVote questionUpVote={questionUpVote} questionDetails={details}/>
          <DownVote questionDownVote={questionDownVote} questionDetails={details}/>
        </div>
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

