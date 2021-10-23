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
    <Button
        variant="outlined"
        className="read-button"
        onClick={() => console.log('delete')}
      >
        Delete My Post
      </Button>

  </div>
  )
  
}

export default QuestionDetails;

