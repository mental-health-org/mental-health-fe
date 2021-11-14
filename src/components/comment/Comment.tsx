import React, {useState} from 'react';
import '../../styles/comment.scss'
import { Response } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';
import UpVote from '../UpVote/UpVote'
import DownVote from '../DownVote/DownVote'
import {QuestionDetailsObject} from '../../interfaces';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

interface CommentProps {
  responseText: Response;
  details: QuestionDetailsObject;
  addResponseVote: ({}) => void;
}

const Comment: React.FC<CommentProps> = ({ responseText, details, addResponseVote }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

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
    const upVote = packageResponseUpVote()
    addResponseVote(upVote)
  }

  const responseDownVote = (event: React.FormEvent) => {
    event.preventDefault()
    const downVote = packageResponseDownVote()
    addResponseVote(downVote)
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
        <button className="reportProblem--btn"><ReportProblemIcon className="ReportProblemIcon"/></button>
        <div className='CommentVoteBox--container'>
          <UpVote upVote={responseUpVote} details={responseText} type={`response`} />
          <DownVote downVote={responseDownVote} details={responseText} type={`response`}/>
        </div>
      </>
      )
    }
  </div>
    )

}

export default Comment;

