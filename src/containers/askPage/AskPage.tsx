import React, { useState, useEffect } from 'react'
import NewQuestionForm from '../../components/newQuestionForm/NewQuestionForm'
import AfterQuestionSubmitPage from '../../components/AfterQuestionSubmitPage/AfterQuestionSubmitPage';
import '../../styles/AskPage.scss'
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react'

interface Question {
  title: string;
  body: string;
  tags: string[];
  user: number | null;
}

interface AskPageProps {
  addNewQuestion: ({}) => void;
}

const AskPage: React.FC<AskPageProps> = ({ addNewQuestion}) => {
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)
  const {userData} = useContext(UserContext) 

  useEffect(() => {
    setTimeout(() => {
      if(!userData || !localStorage.getItem("currentUser")) {
        window.location.href = "https://mental-health-fe.herokuapp.com/"
      }
    }, 3000)
  }, [])

  const postQuestion = (newQuestion: Question) => {
    fetch('https://developer-mental-health-org.herokuapp.com/api/v1/questions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
    .then(response => response.json())
    .then(data => addNewQuestion(data.attributes.question))
    .catch(err => console.log(err))
  }

  const changeIsSubmittedToTrue = (): void => {
    setIsSubmitClicked(true)
  };

  const changeIsSubmittedToFalse = (): void => {
    setIsSubmitClicked(false)
  }

  return (
    <main className='MainContent--container'>
     {!isSubmitClicked && <NewQuestionForm postQuestion={postQuestion} changeIsSubmittedToTrue={changeIsSubmittedToTrue} />}
     {isSubmitClicked && <AfterQuestionSubmitPage changeIsSubmittedToFalse={changeIsSubmittedToFalse}/>}
    </main>
  )
};

export default AskPage;