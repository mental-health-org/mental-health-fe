import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';
import './commentsContainer.scss'

interface CommentsContainerProps {
  details: QuestionDetailsObject
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details }) => {

  const comments = details.responses.map((response) => {
    console.log("comment response", response)
    return <Comment responseText={response} />
  })

  return (
    <div className='CommentsContainer'>
      {comments}
    </div>
  
  )
}

export default CommentsContainer;