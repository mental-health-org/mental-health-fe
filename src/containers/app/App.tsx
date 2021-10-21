import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from '../landingPage/LandingPage';
import { useEffect, useState } from 'react';
import { Tag, Question } from '../../interfaces';
import ErrorPage from '../errorPage/ErrorPage'


  //we may want the option to save all questions to local storage so we don't have to fetch again after a user decides to go back to just view all posts.
  // we may want an option to "view feed again after a user filtered by tag"

  ///TO DO: THIS ALL NEEDS TO BE MOVED TO APP SO THAT SOMEONE COULD DELETE FROM third route.
  // then pass ass props.


function App() {
  const [tags, setTags] = useState<Tag[]>([{id: 1, name: 'tag1'}, {id:2, name: 'tag2'}, {id:3, name: 'tag3'}]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);

  useEffect(() => {
    //To Do: fetch all tags here as well
    setAllQuestions([
         {
          id: 1,
          title: "Need Help",
          responses: 10,
          tags: ['addiction', 'depression']
         },
         {
           id: 2,
           title: "Legal question",
           responses: 15,
            tags: ['addiction', 'sadage']
         },
         {
            id: 3,
            title: "How do I?",
            responses: 20,
            tags: ['addiction']
         }])

  }, [])

  const updateQuestions = (tag: string) => {
    console.log('I am here')
    //will make a fetch request by tag and reset questions.
    //delete below. this is for testing. Later it will make a fetch request.
    setAllQuestions([...allQuestions,  {
            id: 4,
            title: "How do I Question 2?",
            responses: 20,
            tags: ['addiction']
         }])
  }

  //pass this to the questions details view.
  const deleteQuestion = (id: number) => {
    //this will be a delete request.
    // 
    console.log('here is the id I would like to delete:', id)
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
        {/* <Route
          exact
          path="/ask"
          render={}
        /> */}
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
