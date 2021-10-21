import {useEffect, useState} from 'react';
import { Question } from '../../interfaces';
import QuestionCard from '../../components/questionCard/QuestionCard';
import './questionsContainer.scss';
//import grid from MUI
// https://mui.com/components/grid/

interface QuestionContainerProps {
  questions: Question[]
}

const QuestionsContainer: React.FC<QuestionContainerProps> = (props)=> {

  const questionElements = props.questions.map(question=> <QuestionCard question={question} />)

  return (
    <div className="QuestionsContainer">
      {questionElements}
    </div>
  )
}

export default QuestionsContainer;

// { questions: {
//    id: null,
//    type: "questions",
//    attributes: {
//     question_count: 150,
//     questions: [
//      {
//       id: 1,
//       title: "Need Help",
//       responses: 10
//       tags: [addiction, depression]
//      },
//      {
//        id: 2,
//          title: "Legal question",
//          responses: 15
//       tags: [addiction, sadage]
//      },
//      {
//       id: 3,
//       title: "How do I?",
//       responses: 20
//       tags: [addiction]
//      }]
//     }
//    }
//   }