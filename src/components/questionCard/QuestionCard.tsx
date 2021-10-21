import { Question } from '../../interfaces';
import {Link, Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";

interface QuestionCardProps {
  question: Question
}



const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  let history = useHistory();

  const redirect = (id:number) => {
    console.log('in redirect')
    const url = `/question${id}`
    history.push(url)
  };

  return (
    <div className="QuestionCard" key={props.question.id} onClick={() => redirect(props.question.id)}>
      <h2>CARD</h2>
      <p>TITLE: {props.question.title}</p>
      <p>RESPONSES: {props.question.responses}</p>
    </div>

  )
}

export default QuestionCard;


