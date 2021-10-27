import React from 'react'
import {QuestionDetailsObject, Response} from '../../interfaces';
import '../../styles/UpVote.scss'

interface UpVoteProps{
  upVote: (event: React.FormEvent) => void | any;
  // responseUpVote: (event: React.FormEvent) => void | any;
  details: Response | QuestionDetailsObject | any;
  //questionDetails: ;
  type: string;
}

const UpVote: React.FC<UpVoteProps> = ({ upVote, details, type }) => {
  return (
    <>
      {type === 'question' && 
        <button 
          className='UpVote--button'
          onClick={(event) => upVote(event)}
          >UpVote: {details.upvotes}
        </button>}
      {type === 'response' && 
          <button 
          className='UpVote--button'
          onClick={(event) => upVote(event)}
          >UpVote: {details.upvote}
        </button>}
    </>
  )
}

export default UpVote