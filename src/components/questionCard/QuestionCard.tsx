import { Question } from '../../interfaces';

interface QuestionCardProps {
  question: Question
  deleteQuestion: (id:number) => void

}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  return (
    <div className="QuestionCard" key={props.question.id}>
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


