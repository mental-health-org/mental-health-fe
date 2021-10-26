import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ViewQuestionPage from "../viewQuestionPage/ViewQuestionPage";
import LandingPage from "../landingPage/LandingPage";
import { useEffect, useState } from "react";
import { Tag, Question } from "../../interfaces";
import ErrorPage from "../errorPage/ErrorPage";
import AskPage from "../askPage/AskPage";
import {
  fetchAllQuestions,
  fetchAllTags,
  fetchQuestionsByTag,
  fetchQuestionsByKeyword,
} from "../../../src/utils/util";
import Footer from "../footer/Footer";
// import mentalHealthLogo from '../../images/mental_health_logo1.png'

const App: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  console.log("app is being rerendered!");
  const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false);
  const [user, setUser] = useState(
    {
        "id": 1,
        "username": "TestUser",
        "title": null,
        "created_at": "2021-10-21T19:13:02.707669Z",
        "updated_at": "2021-10-21T19:13:02.707686Z"
    })

  useEffect(() => {
    fetchAllQuestions()
      .then((data) => {
        console.log('questions data', data)
        setAllQuestions(data);
      })
      .catch((err) => console.log(err));
    fetchAllTags()
      .then((data) => setTags(data.attributes))
      .catch((err) => console.log(err));
  }, []);

  const updateQuestions = (type: string, query: string) => {
    if (type === "tag") {
      if (query === null) {
        fetchAllQuestions().then((data) => {
          setAllQuestions(data);
          setIsEmptySearch(false);
        });
      } else {
        fetchQuestionsByTag(query)
          .then((data) => {
            setIsEmptySearch(false);
            return data;
          })
          .then((data) => setAllQuestions(data))
          .catch((err) =>
            console.log(err, "error with fetch tags by questions")
          );
      }
    } else if (type === "keyword") {
      fetchQuestionsByKeyword(query)
        .then((data) => {
          setAllQuestions(data);
          setIsEmptySearch(false);
          if (data.length === 0 || !data) {
            setIsEmptySearch(true);
          }
        })
        .catch((err) =>
          console.log(err, "for our keyword without a response??")
        );
    } else if (type === "reset") {
      fetchAllQuestions().then((data) => {
        setAllQuestions(data);
        setIsEmptySearch(false);
      });
    }
  };

  //TO DO: pass this to the questions details view.
  const deleteQuestion = (id: number) => {
    console.log("here is the id I would like to delete:", id);
  };

const addNewQuestion = (newQuestion: any) => {
    setAllQuestions([ ...allQuestions, newQuestion ])
    fetchAllTags()
      .then((data) => setTags(data.attributes))
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <LandingPage
              tags={tags}
              updateQuestions={updateQuestions}
              allQuestions={allQuestions}
              isEmptySearch={isEmptySearch}
            />
          )}
        />
        <Route 
          exact path="/ask"
          render={() => <AskPage addNewQuestion={addNewQuestion}/>}
        />
        <Route
          exact
          path="/question:id"
          render={() => <ViewQuestionPage deleteQuestion={deleteQuestion} setAllQuestions={setAllQuestions}/>}
        />
        <Route path="*" render={() => <ErrorPage type={404} />} />
      </Switch>
      <Footer />
      {/* <img src={mentalHealthLogo} alt="head outline with lotus flower" className="logo--landing-page"></img> */}
    </div>
  );
};

export default App;
