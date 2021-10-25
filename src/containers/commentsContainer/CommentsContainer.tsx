import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';

interface CommentsContainerProps {
  details: QuestionDetailsObject
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details }) => {

  const comments = details.responses.map((response) => {
    return <Comment responseText={response}/>
  })

  return (
    <div className='CommentsContainer'>
      {comments}
    </div>
  
  )
}

export default CommentsContainer;