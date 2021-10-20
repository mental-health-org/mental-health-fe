import React, { useState } from 'react'
import NewQuestionForm from '../../components/newQuestionForm/NewQuestionForm'

const AskPage = () => {
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)

  const changeIsSubmittedToFalse = (): void => {
    setIsSubmitClicked(true)
  }

  return (
    <section>
      <NewQuestionForm changeIsSubmittedToFalse={changeIsSubmittedToFalse}/>
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