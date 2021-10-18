import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import NewQuestionForm from '../../components/newQuestionForm/NewQuestionForm';

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <Route
          exact
          path="/"
          render={() => <p>test</p>} 
        />
        <Route
          exact
          path="/ask"
          render={() => <NewQuestionForm />}
        />
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
