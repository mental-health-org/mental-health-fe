import { Question } from '../../interfaces';
import QuestionCard from '../../components/questionCard/QuestionCard';
import './questionsContainer.scss';


interface QuestionContainerProps {
  questions: Question[]
}

const QuestionsContainer: React.FC<QuestionContainerProps> = (props)=> {
  props.questions.sort((a,b) => b['id'] - a['id'])
  const questionElements = props.questions.map(question=> <QuestionCard question={question} key={question.id}/>)

  return (
    <div className="QuestionsContainer">
      {props.questions.length > 0 && questionElements}
    </div>
  )
}

export default QuestionsContainer;
