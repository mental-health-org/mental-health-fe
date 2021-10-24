import React, { useState } from 'react'
import NewQuestionForm from '../../components/newQuestionForm/NewQuestionForm'
import SubmissionModal from '../../components/SubmissionModal/SubmissionModal'
import AfterQuestionSubmitPage from '../../components/AfterQuestionSubmitPage/AfterQuestionSubmitPage';
import '../../styles/AskPage.scss'

interface Question {
  title: string;
  body: string;
  tags: string[];
}

const AskPage = () => {
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)
  // const [question, setQuestion] = useState<Question | any>({})

  const postQuestion = (newQuestion: Question) => {
    fetch('https://developer-mental-health-org.herokuapp.com/api/v1/questions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  const changeIsSubmittedToTrue = (): void => {
    setIsSubmitClicked(true)
  };

  const changeIsSubmittedToFalse = (): void => {
    setIsSubmitClicked(false)
  }

  // const addQuestion = (newQuestion: Question): void => {
  //   setQuestion(newQuestion)
  // };

  return (
    <main className='MainContent--container'>
     {!isSubmitClicked && <NewQuestionForm postQuestion={postQuestion} changeIsSubmittedToTrue={changeIsSubmittedToTrue}/>}
     {isSubmitClicked && <AfterQuestionSubmitPage changeIsSubmittedToFalse={changeIsSubmittedToFalse}/>}
    </main>
  )
};

export default AskPage;

// Todo: 
// build out modal - mui basic defualt modal
// Show submission modal after user clicks submit - currently just "modal here' message✅
  // make state/method of isSubmittedTrue/setIsSubmittedTrue ✅
  // pass down setter function to form ✅
  // when submit is clicked in form, reset the value of isSubmittedTrue from F to T ✅
  // add in conditional rendering logic ✅

// On Modal:
  // modal displays question standards acknowledgement text ✅
  // possible click on radio button to proceed
  // user sees has two options: 1) Redo the Question 2) Submit question (POST) ✅
    // on Edit btn: user needs to refill out or edit form ✅
    // on Submit: questionObject is sent through POST request function - need endpoint
  