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
import { getUserAccountData, getLinkedInUserData } from '../../utils/util'
import { UserContext } from '../../contexts/UserContext';



const App: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { updateUserData } = useContext(UserContext);

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

  //// ALL USER AUTH LOGIC HERE ....... //////////////////////////////
  const [token, setToken] = useState(null);
  const [code, setCode] = useState(null)
  const [atNewURL, setAtNewURL] = useState(false)

  const getCodeFromURL = () => {
    const currentURL =  window.location.href
    const codeIndex = (currentURL.indexOf("code=") + 5);
    const stateStartsHere = currentURL.indexOf("&state=")
    const code = currentURL.slice(codeIndex, stateStartsHere)
    return code
  }
  //NOTE*JASON says he could reroute this to a new page if we need that rather than our main page.*
  //TO DO: Need to update redirect to go to our actual dashboard and not our local host once ready to deploy.

  const getUserData = (code) => {
    getLinkedInUserData(code).then((data) => {
      getUserAccountData(data.key).then((recievedUserData) => {
        console.log('UserData: ', recievedUserData)
        //set context.
        //updateUserData(recievedUserData)
      })
    .catch(err => console.log(" error!", err))
  })
}

  const getToken = () => {
    const code = getCodeFromURL();
    setCode(code)
    getUserData(code)
    //NEXT STEPS: save code in session storage
    //if the post request is bad, redirect to login page***
    //need to have pretty good error handling for if user can't be found.
    //Need to later add all a token to all post and delete requests
    //Later need to update user data that linkedin does not give to us! --username and title. (either just give a generic username and title or have a prompt requesting this from the user.)
  }

  const setChangedURL = () => {
    setAtNewURL(true)
  }

  // to do: get rid of unnecessary code.
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
        <div className='fader'></div>
        <Footer />
      </div>
    </UserContextProvider>
  );
};

export default App;