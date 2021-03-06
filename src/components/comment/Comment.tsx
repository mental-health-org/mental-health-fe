import React, {useState} from 'react';
import '../../styles/comment.scss'
import { Response } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';
import UpVote from '../UpVote/UpVote'
import DownVote from '../DownVote/DownVote'
import UserActionsBox from '../../containers/UserActionsBox/UserActionsBox';
import {QuestionDetailsObject} from '../../interfaces';
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react';
import { updateCommentText } from '../../utils/util'

interface CommentProps {
  responseText: Response;
  details: QuestionDetailsObject;
  addResponseVote: ({}) => void;
  deleteResponse: (id: number) => void;
  update: () => void;
}

const Comment: React.FC<CommentProps> = ({ responseText, details, addResponseVote, deleteResponse, update }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const { userData } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState<string>(responseText.body)

  const packageResponseUpVote = () => {
    return {
      user: userData.id,
      response: responseText.id,
      vote_type: 1
    }
  }

  const packageResponseDownVote = () => {
    return {
      user: userData.id,
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

  const updateIsDeleted = () => {
    setIsDeleted(true)
  }

  const editComment = () => {
    setIsEditing(true)
  }

  const packageNewCommentText = () => {
    return {
      body: commentBody,
    }
  }

  const handleCommentEditSubmit = () => {
    const newCommentText = packageNewCommentText()
    updateCommentText(responseText.id, newCommentText)
    .then(() => update())
    setIsEditing(false)
  }

  return (
    <div className='Comment--container'>
      <div className='UserNameAndDate--container'>
      {(<span className="user--span"><PersonIcon id='User-Icon'/><p className="detail person-title"> {responseText.user && <p>{responseText.user.title}</p>}</p></span>)}
        <p>From: {responseText['created_at'].slice(0,10)}</p>
        <UserActionsBox 
          editAction={editComment}
          id={responseText.id}
          deleteAction={deleteResponse}
          update={update}
          type="comment"
          updateStatus={updateIsDeleted}
          datasOwnerDetails={responseText}
        />
      </div>
      {!isEditing && (
        <p className='CommentText--p'>{responseText.body}</p>
      )}
      {isEditing && (
        <form 
          className='EditComment--form'
          onSubmit={handleCommentEditSubmit}>
          <textarea
            className='EditCommentBody--textarea'
            value={commentBody}
            onChange={(event) => setCommentBody(event.target.value)}
          />
          <div className='CommentUpdateButtons--container'>
            <button
              className='CancelCommentEdit--button'
              onClick={() => setIsEditing(false)}
            >Cancel</button>
            <button
              className='UpdateComment--button'
              type='submit'
            >Update</button>
            </div>
        </form>
      )}
      <div className='CommentVoteBox--container'>
        <UpVote upVote={responseUpVote} details={responseText} type={`response`} />
        <DownVote downVote={responseDownVote} details={responseText} type={`response`}/>
      </div>
    </div>
  )
}

export default Comment;

