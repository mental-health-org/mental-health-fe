import React from 'react'
import {QuestionDetailsObject} from '../../interfaces';
import '../../styles/DownVote.scss'

interface DownVoteProps{
  questionDownVote: (event: React.FormEvent) => void;
  questionDetails: QuestionDetailsObject;
}

const DownVote: React.FC<DownVoteProps> = ({ questionDownVote, questionDetails }) => {
  return (
    <button 
      className='DownVote--button'
      onClick={(event) => questionDownVote(event)}
      >DownVote: {questionDetails.downvotes}
    </button>
  )
}

export default DownVote;
