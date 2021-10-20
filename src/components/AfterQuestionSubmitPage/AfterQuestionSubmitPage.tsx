import React from 'react'
import { Link } from "react-router-dom";

interface AfterQuestionPageProps {
  changeIsSubmittedToFalse: () => void;
}

const AfterQuestionSubmitPage: React.FC<AfterQuestionPageProps> = ({ changeIsSubmittedToFalse }) => {
  return (
    <div>
      <h1>What would you like to do next??</h1>
      
        <button onClick={() => changeIsSubmittedToFalse()}>Ask</button>
      
      <Link to='/'>
        <button>Find</button>
      </Link>
    </div>
  )
}

export default AfterQuestionSubmitPage
