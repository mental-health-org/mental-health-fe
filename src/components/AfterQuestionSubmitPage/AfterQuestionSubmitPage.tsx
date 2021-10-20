import React from 'react'
import { Link } from "react-router-dom";

const AfterQuestionSubmitPage = () => {
  return (
    <div>
      <h1>What would you like to do next??</h1>
      <Link to='/ask'>
        <button>Ask</button>
      </Link>
      <Link to='/'>
        <button>Find</button>
      </Link>
    </div>
  )
}

export default AfterQuestionSubmitPage
