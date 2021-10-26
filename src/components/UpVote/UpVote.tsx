import React from 'react'
import {QuestionDetailsObject} from '../../interfaces';
import '../../styles/UpVote.scss'

interface UpVoteProps{
  questionUpVote: (event: React.FormEvent) => void;
  questionDetails: QuestionDetailsObject;
}

const UpVote: React.FC<UpVoteProps> = ({ questionUpVote, questionDetails }) => {
  return (
    <button 
      className='UpVote--button'
      onClick={(event) => questionUpVote(event)}
    >Upvote: {questionDetails.upvotes}
    </button>
  )
}

export default UpVote
