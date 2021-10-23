//this will render our indiv comment components
//this will take in props of comments from parent - full question details component
//this container will be a dumb component and recieve new props from parent component from response form on submit.
import Comment from '../../components/comment/Comment'

const CommentsContainer = () => {
  return (
    <div className='CommentsContainer'>
      <Comment />
    </div>
  
  )
}

export default CommentsContainer;