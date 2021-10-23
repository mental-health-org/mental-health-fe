import {QuestionDetailsObject} from '../../interfaces';

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  return (
    <div className='QuestionDetails'>
    <p>{props.questionDetails.id}</p>
    <p>{props.questionDetails.title}</p>

  </div>
  )
  
}

export default QuestionDetails;

