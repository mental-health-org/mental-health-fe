import { UserDetails } from "../../interfaces";
import {QuestionDetailsObject} from '../../interfaces';
import NewComment from '../newComment/NewComment'
import CommentsContainer from '../../containers/commentsContainer/CommentsContainer';
import Header from '../header/Header';
import '../../styles/questionDetails.scss'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import UpVote from '../UpVote/UpVote';
import DownVote from '../DownVote/DownVote';
import UserActionsBox from '../../containers/UserActionsBox/UserActionsBox';
import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { updateQuestionText } from '../../utils/util';

const loader = <Loader
type="Puff"
color="#DA0064"
height={100}
width={100}
// timeout={5000} //3 secs
/>

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  addComment: ({}) => void | any;
  user: UserDetails;
  addQuestionVote: ({}) => void;
  addResponseVote: ({}) => void;
  fetchQuestionsAfterNewComment: () => void;
  isLoading: boolean;
  deleteQuestion: (id: number) => void;
  deleteResponse: (id: number) => void;
  updateDeleteStatus: () => void;
  updateQuestion: () => void;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(props.questionDetails.title)
  const [body, setBody] = useState<string>(props.questionDetails.body)
  
  const packageQuestionUpVote = () => {
    return {
      user: 1,
      post: props.questionDetails.id,
      vote_type: 1
    }
  }

  const packageQuestionDownVote = () => {
    return {
      user: 1,
      post: props.questionDetails.id,
      vote_type: 2
    }
  }

  const questionUpVote = (event: React.FormEvent) => {
    event.preventDefault()
    const questionUpVote = packageQuestionUpVote()
    props.addQuestionVote(questionUpVote)
  }

  const questionDownVote = (event: React.FormEvent) => {
    event.preventDefault()
    const questionDownVote = packageQuestionDownVote()
    props.addQuestionVote(questionDownVote)
  }

  const editQuestion = () => {
    setIsEditing(true)
  }

  const packageQuestionUpdate = () => {
    return {
      title: title,
      body: body
    }
  }

  const handleEditSubmit = () => {
    const newQuestionText = packageQuestionUpdate()
    updateQuestionText(props.questionDetails.id, newQuestionText)
    .then(() => props.updateQuestion())
    setIsEditing(false)
  }
  
  return (
    <>
      {props.questionDetails && (
        <div className='QuestionDetails' key={props.questionDetails.id}>
          <div className='LinksContainer--container'>
            <Link to='/'>
              <button className='BackButtonLink--button'>Back</button>
            </Link>
            <Link to="/ask">
              <button className="AskButtonLink--button">Ask</button>
            </Link>
          </div>
          <Header headerTitle={`Question & Answers`} />
          {props.isLoading && loader}
          <div className='QuestionHeader--container'>
            <p>Created on: {props.questionDetails.created_at.slice(0,10)}</p>
          {(<span className="user--span">
              <PersonIcon />
              <div className="detail person-title">
                {props.questionDetails.user && (
                  <p>{props.questionDetails.user.title}</p>
                )}
                {props.questionDetails.user && (
                  <p>{props.questionDetails.user.username}</p>
                )}
              </div>
            </span>)}
            <UserActionsBox 
              editAction={editQuestion}
              deleteAction={props.deleteQuestion} 
              id={props.questionDetails.id}
              update={props.updateQuestion}
              updateStatus={props.updateDeleteStatus}
            />
          </div>
            {!isEditing && (
              <>
                <h3>{props.questionDetails.title}</h3>
                <p className='BodyText--p'>{props.questionDetails.body}</p>
              </>
            )}
            {isEditing && (
              <form 
                className='QuestionEditForm--form'
                onSubmit={handleEditSubmit}>
                <input 
                  className='QuestionTitleEdit--input'
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <textarea
                  className='QuestionBodyEdit--textarea'
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                />
                <div className='QuestionUpdateButtons--container'>
                  <button
                      className='CancelButton--button'
                      onClick={() => setIsEditing(false)}
                  >Cancel</button>
                  <button
                    className='QuestionEditSubmit--button'
                    type='submit'
                  >Update</button>
                </div>
              </form>
            )}
            <div className='VoteBox--container'>
              <UpVote upVote={questionUpVote} details={props.questionDetails} type={`question`}/>
              <DownVote downVote={questionDownVote} details={props.questionDetails} type={`question`}/>
          </div>
          <NewComment addComment={props.addComment} postId={props.questionDetails.id} user={props.user} fetchQuestionsAfterNewComment={props.fetchQuestionsAfterNewComment}/>
          <CommentsContainer 
            details={props.questionDetails}
            addResponseVote={props.addResponseVote}
            deleteResponse={props.deleteResponse}
            update={props.updateQuestion}
          />
        </div>
      )}
    </> 
  )
}

export default QuestionDetails;