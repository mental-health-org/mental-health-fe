import {QuestionDetailsObject} from '../../interfaces';
import Button from "@mui/material/Button";

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

