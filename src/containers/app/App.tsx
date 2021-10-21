import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from '../landingPage/LandingPage';
import { useEffect, useState } from 'react';
import { Tag } from '../../interfaces';
import ErrorPage from '../errorPage/ErrorPage'


function App() {
  const [tags, setTags] = useState<Tag[]>([{id: 1, name: 'tag1'}, {id:2, name: 'tag2'}, {id:3, name: 'tag3'}]);

  useEffect(() => {
    //fetch all tags
    //fetch all posts

  }, [])

  return (
    <div className="App">
      <Switch>
      <Route
          exact
          path="/"
          // past tags and posts to landing page
          render={() => <LandingPage tags={tags}/>} 
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
