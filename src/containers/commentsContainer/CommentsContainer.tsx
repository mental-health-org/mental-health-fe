//this will render our indiv comment components
//this will take in props of comments from parent - full question details component
//this container will be a dumb component and recieve new props from parent component from response form on submit.
import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';

interface CommentsContainerProps {
  details: QuestionDetailsObject
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details }) => {
  console.log('RESPONSES: ', details.responses)

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