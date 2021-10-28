import React from 'react'
import {QuestionDetailsObject, Response} from '../../interfaces';
import '../../styles/DownVote.scss'

interface DownVoteProps{
  downVote: (event: React.FormEvent) => void | null;
  details: Response | QuestionDetailsObject | any;
  type: string;
}

const DownVote: React.FC<DownVoteProps> = ({ downVote, details, type }) => {
  return (
    <>
      {type === 'question' && 
        <button 
          className='DownVote--button'
          onClick={(event) => downVote(event)}
          >DownVote: {details.downvotes}
        </button>}
      {type === 'response' && 
          <button 
          className='DownVote--button'
          onClick={(event) => downVote(event)}
          >DownVote: {details.downvote}
        </button>}
    </>
  )
}

export default DownVote;
