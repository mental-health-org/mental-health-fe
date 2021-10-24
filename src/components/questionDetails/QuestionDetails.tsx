import {QuestionDetailsObject} from '../../interfaces';
import Button from "@mui/material/Button";
import DeleteModal from '../deleteModal/DeleteModal'
import NewComment from '../newComment/NewComment'
import CommentsContainer from '../../containers/commentsContainer/CommentsContainer';
import Header from '../header/Header';
import '../../styles/questionDetails.scss'
import logo from '../../images/mental_health_logo1.png'

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
    console.log('upvote')
  }
  
  return (
    <div className='QuestionDetails' key={props.questionDetails.id}>
      <div className='LinksContainer--container'>
        <img className='LogoLink--image' src={logo} alt="" />
        <button>Ask</button>
      </div>
      <Header headerTitle={`Questions & Answers`} />
      <h3>{props.questionDetails.title}</h3>
      <p>{props.questionDetails.body}</p>
      <button onClick={() => upVote()}> 
        Upvote: {props.questionDetails.upvote}
      </button>
      <button onClick={() => downVote()}>
        DownVote: {props.questionDetails.downvote}
      </button>
      <p>Created at: {props.questionDetails.created_at}</p>
      <CommentsContainer />
      <NewComment />
      <DeleteModal handleSubmit={handleSubmit}/>

  </div>
  )
  
}

export default QuestionDetails;

