import React, {useState} from 'react';
import '../../styles/newComment.scss';
import { UserDetails } from '../../interfaces';

interface NewCommentProps {
  addComment: ({}) => void | any;
  postId: number;
  user: UserDetails;
  fetchQuestionsAfterNewComment: () => void;
}

const NewComment: React.FC<NewCommentProps> = ({ addComment, postId, user, fetchQuestionsAfterNewComment }) => {
  const [value, setValue] = useState('');
  
  const packageResponse = () => {
    return {
        user: user.id,
        post: postId,
        body: value
    }
  }

  const handleRespondClick = (event: React.FormEvent) => {
    event.preventDefault()
    const newComment = packageResponse()
    addComment(newComment)
    // fetchQuestionsAfterNewComment()
    setValue('')
  }

  return (
    <div className='NewComment--container'>
        <textarea 
          className='RespondTextarea--textarea'
          placeholder='Add text to submit a response...'
          value={value} 
          onChange={event => setValue(event.target.value)} />
        <button 
          className='Respond--button'
          onClick={(event) => handleRespondClick(event)}>Respond</button>
    </div>
  )
}

export default NewComment;