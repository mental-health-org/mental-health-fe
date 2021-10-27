import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';
import '../../styles/commentsContainer.scss'

interface CommentsContainerProps {
  details: QuestionDetailsObject;
  addResponseVote: ({}) => void;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details, addResponseVote}) => {

  const comments = details.responses.map((response) => {
    return <Comment details={details} responseText={response} addResponseVote={addResponseVote}/>
  })

  return (
    <div className='CommentsContainer'>
      {comments}
    </div>
  
  )
}

export default CommentsContainer;