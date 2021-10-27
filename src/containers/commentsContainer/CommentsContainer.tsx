import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';
import '../../styles/commentsContainer.scss'

interface CommentsContainerProps {
  details: QuestionDetailsObject
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details }) => {

  const comments = details.responses.map((response, i) => {

    return <Comment responseText={response} key={i}/>
  })

  return (
    <div className='CommentsContainer'>
      {comments}
    </div>
  
  )
}

export default CommentsContainer;