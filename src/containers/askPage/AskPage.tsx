import React, { useState } from 'react'
import NewQuestionForm from '../../components/newQuestionForm/NewQuestionForm'

interface Question {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

const AskPage = () => {
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)
  const [question, setQuestion] = useState<Question | any>({})

  const changeIsSubmittedToFalse = (): void => {
    setIsSubmitClicked(true)
  }
  const addQuestion = (newQuestion: Question): void => {
    setQuestion(newQuestion)
  }

  return (
    <section>
      {!isSubmitClicked && <NewQuestionForm changeIsSubmittedToFalse={changeIsSubmittedToFalse} addQuestion={addQuestion}/>}
      {isSubmitClicked && <p>Modal here</p>}
    </section>
  )
};

export default AskPage;

// Todo: 
// build out modal - mui basic defualt modal
// Show submission modal after user clicks submit
  // make state/method of isSubmittedTrue/setIsSubmittedTrue
  // pass down setter function to form
  // when submit is clicked in form, reset the value of isSubmittedTrue from F to T
  // add in conditional rendering logic