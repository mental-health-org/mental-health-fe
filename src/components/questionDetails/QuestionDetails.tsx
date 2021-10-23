import {QuestionDetailsObject} from '../../interfaces';
import Button from "@mui/material/Button";
import DeleteModal from '../deleteModal/DeleteModal'
import NewComment from '../newComment/NewComment'
import CommentsContainer from '../../containers/commentsContainer/CommentsContainer';
import './questionDetails.scss'

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
  
  return (
    <div className='QuestionDetails' key={props.questionDetails.id}>
      <h2>Questions and Answers</h2>
      <p>{props.questionDetails.created_at}</p>
      <h3>{props.questionDetails.title}</h3>
      <p>{props.questionDetails.body}</p>
      <p>Upvote: {props.questionDetails.upvote}</p>
      <p>DownVote: {props.questionDetails.downvote}</p>
      {/* <Button
        variant="outlined"
        className="read-button"
        onClick={() => console.log('add a comment')}
      >
        Add Comment
      </Button> */}
      <CommentsContainer />
      <NewComment />
      <DeleteModal handleSubmit={handleSubmit}/>

  </div>
  )
  
}

export default QuestionDetails;

