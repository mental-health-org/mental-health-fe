import {QuestionDetailsObject} from '../../interfaces';
import Button from "@mui/material/Button";

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  deleteQuestion: (id: number) => void;
}


const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  return (
    <div className='QuestionDetails'>
    <p>{props.questionDetails.id}</p>
    <p>{props.questionDetails.title}</p>
    <Button
        variant="outlined"
        className="read-button"
        onClick={() => {props.deleteQuestion(props.questionDetails.id)}}
      >
        Delete My Post
      </Button>

  </div>
  )
  
}

export default QuestionDetails;

