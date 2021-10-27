import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';
import '../../styles/commentsContainer.scss'

interface CommentsContainerProps {
  details: QuestionDetailsObject;
  addResponseVote: ({}) => void;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details, addResponseVote}) => {

  const comments = details.responses.map((response, i) => {
    return <Comment details={details} responseText={response} addResponseVote={addResponseVote} key={i}/>
  })

  return (
    <div className='CommentsContainer'>
      {comments}
    </div>
  
  )
}

export default CommentsContainer;