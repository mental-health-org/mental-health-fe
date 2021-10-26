import React, {useState} from 'react';
import './comment.scss'
import { Response } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';
import UpVote from '../UpVote/UpVote'
import DownVote from '../DownVote/DownVote'
import {QuestionDetailsObject} from '../../interfaces';
import { eventNames } from 'process';

interface CommentProps {
  responseText: Response;
  questionDownVote: (event: React.FormEvent) => void;
  questionUpVote: (event: React.FormEvent) => void;
  details: QuestionDetailsObject;
}

const Comment: React.FC<CommentProps> = ({ responseText, questionUpVote, questionDownVote, details }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  console.log('<RESPONSE>',responseText);
  console.log('<>DETAILS<>', details)

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

  const packageResponseUpVote = () => {
    return {
      user: 1,
      response: responseText.id,
      vote_type: 1
    }
  }

  const packageResponseDownVote = () => {
    return {
      user: 1,
      response: responseText.id,
      vote_type: 2
    }
  }

  const responseUpVote = (event: React.FormEvent) => {
    event.preventDefault()
  }

  const responseDownVote = (event: React.FormEvent) => {
    event.preventDefault()
    const downVote = packageResponseDownVote()
    
  }



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
          <UpVote responseUpVote={responseUpVote} questionDetails={details} type={`response`}/>
          <DownVote responseDownVote={responseDownVote} questionDetails={details} type={`response`}/>
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

