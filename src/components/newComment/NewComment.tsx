import React, {useState} from 'react';
import '../../styles/newComment.scss'

interface NewCommentProps {
  addComment: ({}) => void | any;
  postId: number;
}

const NewComment: React.FC<NewCommentProps> = ({ addComment, postId }) => {
  const [value, setValue] = useState('');

  const packageResponse = () => {
    return {
        post: postId,
        body: value
    }
  }

  const handleRespondClick = (event: React.FormEvent) => {
    event.preventDefault()
    const newComment = packageResponse()
    addComment(newComment)
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