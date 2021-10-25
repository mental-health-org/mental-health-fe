import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import ViewQuestionPage from '../viewQuestionPage/ViewQuestionPage'
import LandingPage from '../landingPage/LandingPage';
import { useEffect, useState } from 'react';
import { Tag, Question } from '../../interfaces';
import ErrorPage from '../errorPage/ErrorPage'
import AskPage from '../askPage/AskPage';
import { fetchAllQuestions, fetchAllTags, fetchQuestionsByTag } from '../../../src/utils/util'

const App: React.FC = (props) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetchAllQuestions().then(data => setAllQuestions(data))
    fetchAllTags().then(data => setTags(data.attributes))
  }, [])

  const updateQuestions = (tag: string) => {
    if (tag === 'null') {
      //tag is null and it wasn't previously null then fetch all questions and reset the page***
      return
    } else if (tag === '') {
      //fetch questions by tag
      
    }
    // console.log('I am here in update questions with', tag)
    //will make a fetch request by tag and reset questions.
   
  }

  //pass this to the questions details view.
  const deleteQuestion = (id: number) => {
   // create delete request when you have enought data!
    console.log('here is the id I would like to delete:', id)
  }

const addNewQuestion = (newQuestion: any) => {
    setAllQuestions([ ...allQuestions, newQuestion ])
  }

  return (
    <div className="App">
      <Switch>
      <Route
          exact
          path="/"
          // past tags and posts to landing page
          render={() => <LandingPage tags={tags} updateQuestions={updateQuestions} allQuestions={allQuestions}/>} 
        />
        <Route
          exact
          path="/ask"
          render={() => <AskPage addNewQuestion={addNewQuestion}/>}
        />
        <Route
          exact
          path="/question:id"
          render={() => <ViewQuestionPage deleteQuestion={deleteQuestion} setAllQuestions={setAllQuestions}/>}
        />
        <Route path="*" render={() => <ErrorPage type={404} />} />
      </Switch>
    </div>
  );
}

export default App;
