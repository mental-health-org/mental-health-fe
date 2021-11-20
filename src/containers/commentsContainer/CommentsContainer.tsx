import Comment from '../../components/comment/Comment'
import {QuestionDetailsObject} from '../../interfaces';
import '../../styles/commentsContainer.scss'
import React, {useState, useEffect } from 'react'

interface CommentsContainerProps {
  details: QuestionDetailsObject;
  addResponseVote: ({}) => void;
  deleteResponse: (id: number) => void;
  update: () => void;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ details, addResponseVote, deleteResponse, update }) => {

  useEffect(() => {
    update()
  }, [])

  const comments = details.responses.map((response, i) => {
    return (
      <Comment 
        details={details} 
        responseText={response} 
        addResponseVote={addResponseVote} 
        key={i}
        deleteResponse={deleteResponse}
        update={update}
      />
    ) 
  })

  return (
    <div className='CommentsContainer'>
      {comments}
    </div>
  
  )
}

export default CommentsContainer;