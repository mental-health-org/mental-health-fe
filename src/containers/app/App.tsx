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

const App: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false);
  const [user, setUser] = useState(
    {
        "id": 1,
        "username": "SM",
        "title": "counselor",
        "created_at": "2021-10-21T19:13:02.707669Z",
        "updated_at": "2021-10-21T19:13:02.707686Z"
    })

  useEffect(() => {
    fetchAllQuestions()
      .then((data) => {
        setAllQuestions(data);
      })
      .catch((err) => console.log(err));
    fetchAllTags()
      .then((data) => {
        data.attributes.sort()
        setTags(data.attributes)
      })
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
            console.log(err)
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
          console.log(err)
        );
    } else if (type === "reset") {
      fetchAllQuestions().then((data) => {
        setAllQuestions(data);
        setIsEmptySearch(false);
      });
    }
  };

const addNewQuestion = (newQuestion: any) => {
    setAllQuestions([ ...allQuestions, newQuestion ])
    fetchAllTags()
      .then((data) => setTags(data.attributes))
      .catch((err) => console.log(err));
  }

  const fetchQuestionsAfterNewComment = ():void => {
    fetchAllQuestions()
      .then((data) => {
        setAllQuestions(data);
      })
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
          render={() => <AskPage addNewQuestion={addNewQuestion} user={user}/>}
        />
        <Route
          exact
          path="/question:id"
          render={() => <ViewQuestionPage setAllQuestions={setAllQuestions} fetchQuestionsAfterNewComment={fetchQuestionsAfterNewComment} user={user}/>}
        />
        <Route path="*" render={() => <ErrorPage type={404} />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
