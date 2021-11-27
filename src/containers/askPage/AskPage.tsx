import React, { useState, useEffect } from 'react'
import NewQuestionForm from '../../components/newQuestionForm/NewQuestionForm'
import AfterQuestionSubmitPage from '../../components/AfterQuestionSubmitPage/AfterQuestionSubmitPage';
import '../../styles/AskPage.scss'
import { UserDetails } from '../../interfaces'
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react'
import { useCookies } from "react-cookie";

//this is a NEW question or post object.
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
  const [cookies, setCookie] = useCookies();
  useEffect(() => {
    // setTimeout(() => {
    //   if(!userData || !localStorage.getItem("currentUser")) {
    //     //window.location.href = "https://mental-health-fe.herokuapp.com/"
    //     window.location.href = 'http://localhost:3000/'
    //   }
    // }, 3000)

    setTimeout(() => {
      if(!userData || !cookies.currentUser) {
        //window.location.href = "https://mental-health-fe.herokuapp.com/"
        window.location.href = 'http://localhost:3000/'
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