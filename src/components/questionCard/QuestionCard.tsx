import { Question } from '../../interfaces';

interface QuestionCardProps {
  question: Question
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  return (
    <div className="QuestionCard" key={props.question.id}>
      <h2>CARD</h2>
      <p>TITLE: {props.question.title}</p>
      <p>RESPONSES: {props.question.responses}</p>
    </div>
  )
}

export default QuestionCard;


