import {QuestionDetailsObject, UserDetails} from '../interfaces'
import {useState} from 'react';

interface QuestionVoteContainerProps {
  questionDetails: QuestionDetailsObject;
  upVote: () => void | any;
  downVote: () => void | any;
}


const QuestionVoteContainer: React.FC<QuestionVoteContainerProps> = (props) => {
  const [value, setValue] = useState<number>(0); // integer state
  const forceUpdate = () => {
    setValue(value + 1); // update the state to force 
}

  return (
    <div className='VoteBox--container'>
        <button 
          className='UpVote--button'
          onClick={() => {
           forceUpdate();
           props.upVote()
          }}
        >Upvotes: {props.questionDetails.upvotes}
        </button>
        <button 
        className='DownVote--button'
        onClick={() => {
          props.downVote();
          forceUpdate();
        }}
        >DownVotes: {props.questionDetails.downvotes}
        </button>
      </div>
  )
}

export default QuestionVoteContainer;