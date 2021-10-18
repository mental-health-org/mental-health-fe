import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from '../landingPage/LandingPage';
import { useEffect, useState } from 'react';

function App() {
  const [tags, setTags] = useState<string[]>(['tag1', 'tag2', 'tag3']);

  useEffect(() => {
    //fetch all tags
    //fetch all posts

  }, [])

  return (
    <div className="App">
      {/* <Switch> */}
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
         {/* <Route
          exact
          path="/question:id"
          render={}
        /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
