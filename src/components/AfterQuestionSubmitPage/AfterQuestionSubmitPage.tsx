import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/AfterSuccessfulSubmitPage.scss'
import logo from '../../images/mental_health_logo1.png'

interface AfterQuestionPageProps {
  changeIsSubmittedToFalse: () => void;
}

const AfterQuestionSubmitPage: React.FC<AfterQuestionPageProps> = ({ changeIsSubmittedToFalse }) => {
  return (
    <section className='AfterSubmit--container'>
      <img 
        className='Logo--image'
        src={logo} 
        alt="mental health logo and home button" 
      />
      <h1>What would you like to do next??</h1>
      <div className='AfterSubmitButtons--container'>
        <button 
          className='AskButton--button' 
          onClick={() => changeIsSubmittedToFalse()}
        >Ask</button>
        <Link to='/'>
          <button className='FindButton--button'>Find</button>
        </Link>
      </div>
    </section>
  )
}

export default AfterQuestionSubmitPage
