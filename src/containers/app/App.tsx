import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";

import LandingPage from '../landingPage/LandingPage';
import { useEffect, useState } from 'react';
import { Tag, Question } from '../../interfaces';
import ErrorPage from '../errorPage/ErrorPage'
import AskPage from '../askPage/AskPage';
import { fetchAllQuestions, fetchAllTags, fetchQuestionsByTag } from '../../../src/utils/util'


function App() {
  const [tags, setTags] = useState<Tag[]>([{id: 1, name: 'tag1'}, {id:2, name: 'tag2'}, {id:3, name: 'tag3'}]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);

  useEffect(() => {
    //To Do: fetch all tags here as well
    fetchAllQuestions().then(data => setAllQuestions(data))
    fetchAllQuestions().then(data => console.log(data))
    fetchAllTags().then(data => setTags(data))
    fetchQuestionsByTag().then(data => console.log(data))

  }, [])

  const updateQuestions = (tag: string) => {
    if (tag === 'null') {
      //tag is null and it wasn't previously null then fetch all questions and reset the page***
      return
    } else if (tag === '') {
      //fetch questions by tag
      
    }
    console.log('I am here in update questions with', tag)
    //will make a fetch request by tag and reset questions.
   
  }

  //pass this to the questions details view.
  const deleteQuestion = (id: number) => {
    //this will be a delete request.
    // 
    console.log('here is the id I would like to delete:', id)
  }

 // if new post is made , refetch all posts* because we need new tags for example if user is searching.

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
          render={() => <AskPage />}
        />
        <Route
          exact
          path="/question:id"
          render={() => <p>Question DETAILS PAGE</p>}
        />
        <Route path="*" render={() => <ErrorPage type={404} />} />
      </Switch>
    </div>
  );
}

export default App;
