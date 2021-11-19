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
import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react';

const loader = <Loader
type="Puff"
color="#DA0064"
height={100}
width={100}
/>

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  addComment: ({}) => void | any;
  addQuestionVote: ({}) => void;
  addResponseVote: ({}) => void;
  fetchQuestionsAfterNewComment: () => void;
  isLoading: boolean;
  deleteQuestion: (id: number) => void;
  deleteResponse: (id: number) => void;
  updateDeleteStatus: () => void;
  updateComments: () => void;

}

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  const { userData } = useContext(UserContext);

  const packageQuestionUpVote = () => {
    return {
      user: userData.id,
      post: props.questionDetails.id,
      vote_type: 1
    }
  }

  const packageQuestionDownVote = () => {
    return {
      user: userData.id,
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
                {userData && (
                  <p>{userData.title}</p>
                )}
                {userData && (
                  <p>{userData.username}</p>
                )}
              </div>
            </span>)}

            <UserActionsBox 
              delete={props.deleteQuestion} 
              id={props.questionDetails.id}
              update={props.fetchQuestionsAfterNewComment}
              updateDeleteStatus={props.updateDeleteStatus}
              type="question"
              />

          </div>
            <h3>{props.questionDetails.title}</h3>
            <p className='BodyText--p'>{props.questionDetails.body}</p>
            <div className='VoteBox--container'>
              <UpVote upVote={questionUpVote} details={props.questionDetails} type={`question`}/>
              <DownVote downVote={questionDownVote} details={props.questionDetails} type={`question`}/>
          </div>
          <NewComment addComment={props.addComment} postId={props.questionDetails.id} fetchQuestionsAfterNewComment={props.fetchQuestionsAfterNewComment}/>
          <CommentsContainer 
            details={props.questionDetails}
            addResponseVote={props.addResponseVote}
            deleteResponse={props.deleteResponse}
            update={props.updateComments}
          />
        </div>
      )}
    </> 
  )
}

export default QuestionDetails;

