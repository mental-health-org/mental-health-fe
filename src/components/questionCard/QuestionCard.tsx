import { Question } from '../../interfaces';
import {Link, Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";

interface QuestionCardProps {
  question: Question
  deleteQuestion: (id:number) => void

}



const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  let history = useHistory();

  const redirect = (id:number) => {
    // history.push(`/question${id}`)
    console.log('in redirect')
    const url = `/question${id}`
    // return <Redirect to={url} />
    
    history.push(url)
  };

  return (
    <div className="QuestionCard" key={props.question.id} onClick={() => redirect(props.question.id)}>
      <h2>CARD</h2>
      <p>TITLE: {props.question.title}</p>
      <p>RESPONSES: {props.question.responses}</p>
      {/* //only show delete if the question matches the users id. */}
      {/* TO TO : move this to the view question details view route. */}
      {/* A user will have to click on the card to have the ability to go in and delete it because that funcitonality will be available in the view question detailst view
      <button onClick={() => {props.deleteQuestion(props.question.id)}}>delete</button> */}
      
    </div>

  )
}

export default QuestionCard;


