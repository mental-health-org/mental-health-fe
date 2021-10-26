import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';
import './commentsContainer.scss'

interface CommentsContainerProps {
  details: QuestionDetailsObject;
  questionDownVote: (event: React.FormEvent) => void;
  questionUpVote: (event: React.FormEvent) => void;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details, questionUpVote, questionDownVote }) => {

  const comments = details.responses.map((response) => {
    return <Comment details={details} responseText={response} questionUpVote={questionUpVote} questionDownVote={questionDownVote}/>
  })

  return (
    <div className='CommentsContainer'>
      {comments}
    </div>
  
  )
}

export default CommentsContainer;