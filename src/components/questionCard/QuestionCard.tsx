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
      <button onClick={() => {props.deleteQuestion(props.question.id)}}>delete</button>
    </div>
  )
}

export default QuestionCard;


