import {QuestionDetailsObject} from '../../interfaces';
// import Button from "@mui/material/Button";
// import DeleteModal from '../deleteModal/DeleteModal'
import NewComment from '../newComment/NewComment'
import CommentsContainer from '../../containers/commentsContainer/CommentsContainer';
import Header from '../header/Header';
import '../../styles/questionDetails.scss'
// import logo from '../../images/mental_health_logo1.png'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  deleteQuestion: (id: number) => void;
  addComment: ({}) => void | any;
  addQuestionVote: ({}) => void | any;
}


const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {

  const packageQuestionUpVote = () => {
    return {
      user: 1,
      post: props.questionDetails.id,
      vote_type: 1
    }
  }

  const questionUpVote = (event: React.FormEvent) => {
    event.preventDefault()
    const questionUpVote =packageQuestionUpVote()
    // console.log(questionUpVote)
    props.addQuestionVote(questionUpVote)
    //Then update comment
  }
  const questionDownVote = () => {
    //package downvote
    //Post Request - with package
    //Then update question
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

      <p>Created on: {props.questionDetails.created_at.slice(0,10)}</p>
      {(<span className="user--span"><PersonIcon/><p className="detail person-title"> {props.questionDetails.user && <p>{props.questionDetails.user}</p>}</p></span>)}
      {/* {props.questionDetails.user && <p>{props.questionDetails.user}</p>} */}

      <p className='BodyText--p'>{props.questionDetails.body}</p>

      <div className='VoteBox--container'>
        <button 
          className='UpVote--button'
          onClick={(event) => questionUpVote(event)}
        >Upvote: {props.questionDetails.upvotes}
        </button>

        <button 
        className='DownVote--button'
        onClick={() => questionDownVote()}
        >DownVote: {props.questionDetails.downvotes}
        </button>
      </div>
    
      <NewComment addComment={props.addComment} postId={props.questionDetails.id}/>
      <CommentsContainer details={props.questionDetails}/>
      {/* <DeleteModal handleDelete={handleDelete}/> */}

  </div>
  )
  
}

export default QuestionDetails;

