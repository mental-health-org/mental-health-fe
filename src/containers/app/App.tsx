// @ts-ignore
// @ts-nocheck

import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ViewQuestionPage from "../viewQuestionPage/ViewQuestionPage";
import LandingPage from "../landingPage/LandingPage";
import { useEffect, useState } from "react";
import { Tag, Question } from "../../interfaces";
import ErrorPage from "../errorPage/ErrorPage";
import AskPage from "../askPage/AskPage";
import { UserContextProvider } from '../../contexts/UserContext'
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
import { requestLinkedInAuth, getLinkedInUserData} from '../../utils/util'
import {  firstLinkedinRequestToBackend } from '../../utils/util'

const App: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const deleteQuestion = (id: number): void => {
    if(window.confirm('Are you sure that you want to delete this question forever?')) {
      removeQuestion(id).then((data) => console.log('Data: ', data))
      fetchQuestionsAfterNewComment()
    }
  }

  const deleteResponse = (id: number): void => {
    if(window.confirm('Are you sure that you want to delete this response forever?')) {
      removeResponse(id).then(data => console.log('Data: ', data))
      fetchQuestionsAfterNewComment()
    }
  }

  //// ALL USER AUTH LOGIC HERE ....... //////////////////////////////


// firstLinkedinRequestToBackend().then(data => {
//   console.log("here is jasons new endpoint", data)
// }).catch(err => console.log("err for jasons new endpoint", err))


  const [token, setToken] = useState(null);
  const [code, setCode] = useState(null)
  // const [linkedInData, setLinkedInUserData] = useState();
  const [atNewURL, setAtNewURL] = useState(false)

  const getCodeFromURL = () => {
    const currentURL =  window.location.href
    const codeIndex = (currentURL.indexOf("code=") + 5);
    // const code = currentURL.slice(codeIndex , -2);
    const stateStartsHere = currentURL.indexOf("&state=")
    const code = currentURL.slice(codeIndex, stateStartsHere)


    return code
  }

  ///https://developer-mental-health-org.herokuapp.com/auth/linkedin/

  //NOTE*JASON says he could reroute this to a new page if we need that rather than our main page.*

  const getUserData = (code) => {
   //JASONS CODe - here
   console.log("code---", code)
   console.log(typeof(code))
   
    getLinkedInUserData(code).then((data) => {
      console.log("linkedInData, success! --> ", data)
      // setLinkedInUserData(data)
    })
    .catch(err => console.log(" error!", err))


  }

  const getToken = () => {
    const code = getCodeFromURL();
    setCode(code)
    getUserData(code)
    
    //STEPS: save code in session storage
  }

  const setChangedURL = () => {
    setAtNewURL(true)
  }

  // // this needs to be triggered on a state change so app knows that it needs to rerender or will it rerender based on route anyway*
  useEffect(() => {
    console.log("I am in useEffect for getting the token")
   
    if(atNewURL) {
      getToken()
    }

    
    if(window.location.href.includes('code')) {
      console.log("I am here rerendered!")
      getToken()
    }
  }, [])

  if(!code) {
    console.log("I am here in useEffect for !token")
    return <Login setChangedURL={setChangedURL}/>
  }

/////////////////////////////////////////////////////////

  return (
    <UserContextProvider>
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
                user={user}/>}
          />
          <Route
            exact
            path="/question:id"
            render={() => 
              <ViewQuestionPage 
                setAllQuestions={setAllQuestions} 
                fetchQuestionsAfterNewComment={fetchQuestionsAfterNewComment}
                deleteQuestion={deleteQuestion}
                deleteResponse={deleteResponse}
                user={user}/>}
          />
          <Route path="/community-guidelines" render={() => <CommunityGuidelines />} />
          <Route path="*" render={() => <ErrorPage type={404} />} />
        </Switch>
        <Footer />
      </div>
    </UserContextProvider>
  );
};

export default App;