import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import ViewQuestionPage from '../viewQuestionPage/ViewQuestionPage'
import LandingPage from '../landingPage/LandingPage';
import { useEffect, useState } from 'react';
import { Tag, Question } from '../../interfaces';
import ErrorPage from '../errorPage/ErrorPage'
import AskPage from '../askPage/AskPage';
import { fetchAllQuestions, fetchAllTags, fetchQuestionsByTag, fetchQuestionsByKeyword } from '../../../src/utils/util'



const App: React.FC = (props) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  console.log('app is being rerendered!')
  const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false)

  useEffect(() => {
    fetchAllQuestions().then(data =>  console.log("all questions-->", data))

     fetchAllQuestions().then(data => {
      setAllQuestions(data)
    })

    fetchAllTags().then(data => setTags(data.attributes))

  }, [])

  const updateQuestions = (type: string, query: string) => {
    if (type === 'tag') {
    if (query === null) {
      
      //tag is null and it wasn't previously null then fetch all questions and reset the page***
      fetchAllQuestions().then(data => {
        setAllQuestions(data)
      })
    } else if (query === '') {
      //fetch questions by tag
      
    } else {
      //request to the endpoint by tag.
      fetchQuestionsByTag(query).then((data) => {
        console.log("new set of questions by tag", data)
        return data
      }).then(data => setAllQuestions(data))
      .catch(err => console.log(err, 'error with fetch tags by questions'))
    }
    console.log('I am here in update questions with', query)
    //will make a fetch request by tag and reset questions.
  } else if (type === 'keyword') {
    console.log(type, query, "for keyword")
    fetchQuestionsByKeyword(query).then(data => console.log ("kewyword questions-->", data))
    fetchQuestionsByKeyword(query).then(data => {
      console.log('data--->', data)
      setAllQuestions(data)
      if (data.length === 0 || !data) {
        setIsEmptySearch(true)
      }
    })
  } else if (type === 'reset') {
    fetchAllQuestions().then(data => {
      setAllQuestions(data)
    })
  }
   
  }

  //pass this to the questions details view.
  const deleteQuestion = (id: number) => {
   // create delete request when you have enought data!
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
          render={() => <LandingPage tags={tags} updateQuestions={updateQuestions} allQuestions={allQuestions} isEmptySearch={isEmptySearch}/>} 
        />
        <Route
          exact
          path="/ask"
          render={() => <AskPage />}
        />
        <Route
          exact
          path="/question:id"
          render={() => <ViewQuestionPage deleteQuestion={deleteQuestion}/>}
        />
        <Route path="*" render={() => <ErrorPage type={404} />} />
      </Switch>
    </div>
  );
}

export default App;
