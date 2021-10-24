import {QuestionDetailsObject} from '../../interfaces';
import Button from "@mui/material/Button";
import DeleteModal from '../deleteModal/DeleteModal'
import NewComment from '../newComment/NewComment'
import CommentsContainer from '../../containers/commentsContainer/CommentsContainer';
import Header from '../header/Header';
import '../../styles/questionDetails.scss'
import logo from '../../images/mental_health_logo1.png'
import { Link } from "react-router-dom";

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  deleteQuestion: (id: number) => void;
}

// TO DO: if the post matches the users post -- only then show delete my post button
//TO DO: add modal --> are you sure youd like to delete your post?

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  const handleSubmit = () => {
    console.log('handle submit')
    props.deleteQuestion(props.questionDetails.id)
  }

  const upVote = () => {
    //To do: make request
    console.log('upvote')
  }
  const downVote = () => {
    //To do: make request
    console.log('downvote')
  }
  
  return (
    <div className='QuestionDetails' key={props.questionDetails.id}>

      <div className='LinksContainer--container'>

        <Link to='/'>
          {/* <img className='LogoLink--image' src={logo} alt="link to home" /> */}
          <button className='BackButtonLink--button'>Back</button>
        </Link>
        <Link to='/ask'>
          <button className='AskButtonLink--button'>Ask</button>
        </Link>
      </div>

      <Header headerTitle={`Question & Answers`} />

      <h3>{props.questionDetails.title}</h3>

      <p>Created on: {props.questionDetails.created_at}</p>

      <p className='BodyText--p'>{props.questionDetails.body}</p>

      <div className='VoteBox--container'>
        <button 
          className='UpVote--button'
          onClick={() => upVote()}
        >Upvote: {props.questionDetails.upvote}
        </button>
        <button 
        className='DownVote--button'
        onClick={() => downVote()}
        >DownVote: {props.questionDetails.downvote}
        </button>
      </div>
    
      
      <CommentsContainer />
      <NewComment />
      <DeleteModal handleSubmit={handleSubmit}/>

  </div>
  )
  
}

export default QuestionDetails;

