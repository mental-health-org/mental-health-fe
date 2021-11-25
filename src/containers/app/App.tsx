// @ts-ignore
// @ts-nocheck

import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ViewQuestionPage from "../viewQuestionPage/ViewQuestionPage";
import LandingPage from "../landingPage/LandingPage";
import { useEffect, useState, useContext } from "react";
import { Tag, Question } from "../../interfaces";
import ErrorPage from "../errorPage/ErrorPage";
import AskPage from "../askPage/AskPage";
import { UserContext } from '../../contexts/UserContext';

import {
  fetchAllQuestions,
  fetchAllTags,
  fetchQuestionsByTag,
  fetchQuestionsByKeyword,
  removeQuestion,
  removeResponse
} from "../../../src/utils/util";
import Footer from "../footer/Footer";
import CommunityGuidelines from "../communityGuidelines/CommunityGuideLines";
import Login from '../login/Login'
import { getUserAccountData, getLinkedInUserData } from '../../utils/util'

const App: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { updateUserData} = useContext(UserContext);

  useEffect(() => {
    fetchAllQuestions()
      .then((data) => {
        setAllQuestions(data);
      }).then(() => setIsLoading(false))
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
  // Note- Do not remove fetchAllQuestions(): we need to refetch questions to get the data needed after post, so I added the next 4 lines to fix the  bug that wasn't showing our new question on landing page with our username
  fetchAllQuestions()
  .then((data) => {
    setAllQuestions(data)
  })
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

  const deleteQuestion = (id: number): void => {
    if(window.confirm('Are you sure that you want to delete this question forever?')) {
      removeQuestion(id)
      .then((data) => console.log('Data: ', data))
      // this .catch was a quick bug fix - not sure why/how it fixed our rerender issue
      .catch(err => console.log(err))
      .then(() => fetchAllQuestions()
      .then((data) => {
        setAllQuestions(data);
      }))
    }
  }

  // START OF OAUTH LOGIC:
  const [code, setCode] = useState(null)
  const [atNewURL, setAtNewURL] = useState(false)

  const getCodeFromURL = () => {
    const currentURL =  window.location.href
    const codeIndex = (currentURL.indexOf("code=") + 5);
    const stateStartsHere = currentURL.indexOf("&state=")
    const code = currentURL.slice(codeIndex, stateStartsHere)
    return code
  }

  const getUserData = (code) => {
    getLinkedInUserData(code).then((data) => {
      getUserAccountData(data.key).then((recievedUserData) => {
        console.log('UserData: ', recievedUserData)
        if (recievedUserData === '{"detail":"Not found."}') {
          localStorage.removeItem("currentUser")
          console.log("sorry there was a problem signing in")
          return
        }
        updateUserData(recievedUserData)
        const stringifiedUser = JSON.stringify(recievedUserData)
        localStorage.setItem("currentUser", stringifiedUser)
      })
    .catch(err => console.log(" error!", err))
  })
}

  const getToken = () => {
    if(!localStorage.getItem("currentUser")){
      const code = getCodeFromURL();
      setCode(code)
      getUserData(code)
    } 
  }

  const setChangedURL = () => {
    setAtNewURL(true)
  }

  useEffect(() => {
    if(atNewURL) {
      getToken()
    }
    if(window.location.href.includes('code')) {
      console.log("I am here rerendered!")
      getToken()
    } 
  }, [])


  if(!code) {
    if(!localStorage.getItem("currentUser")){
      return <Login setChangedURL={setChangedURL} />
    } 
  }
/////////////////////////////////////////////////////////

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
                isLoading={isLoading}
              />
            )}
          />
          <Route 
            exact path="/ask"
            render={() => 
              <AskPage 
                addNewQuestion={addNewQuestion} 
                />}
          />
          <Route
            exact
            path="/question:id"
            render={() => 
              <ViewQuestionPage 
                setAllQuestions={setAllQuestions} 
                fetchQuestionsAfterNewComment={fetchQuestionsAfterNewComment}
                deleteQuestion={deleteQuestion}
              />}
          />
          <Route path="/community-guidelines" render={() => <CommunityGuidelines />} />
          <Route path="*" render={() => <ErrorPage type={404} />} />
        </Switch>
        <Footer />
      </div>
  );
};

export default App;