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

  //// ALL USER AUTH LOGIC HERE ....... //////////////////////////////
  // you can get rid of set token through all elements- not necessary

  //MAJOR TO DO -> go in all parent components and reassign to landing page and not to local host.*
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

   // const getToken = () => {
  //   const tokenString = sessionStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token
  // };
  
  const removeToken = () => {
    setToken(null)
  }
  

  const getUserData = (code) => {
    getLinkedInUserData(code).then((data) => {
      // this will give me the token so I can request data about a user
      // we can request user data by giving Jason the token
      // we can also make post requests this way.
      // we need to put this in local storage and have some sort of session time out of the page.
        // sessionStorage.setItem('token', JSON.stringify(userToken));
        // setToken(userToken.token);
        // right now what is being set is user not found so have to handle that error when Jason gets this fixed.

      getUserAccountData(data.key).then((recievedUserData) => {
        console.log('UserData: ', recievedUserData)
        
        // you are here!: you need to set context. You just can't set context it looks like from app. doesnt have access to provider maybe?? Does it not recognize it?
        //set context.
        // console.log(userData)
       //Storage {currentUser: '{"detail":"Not found."}', length: 1}
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

// to do -- > set up logout .. when user logs out ... delete all session storage.


  const getToken = () => {
    
    // this means if there already is a valid token return out, dont make another request.
    // if (localStorage.getItem('recievedUserData.detail === '{"detail":"Not found."}') {
    //   localStorage.removeItem("currentUser")
    //   console.log("sorry there was a problem signing in")
    //   return
    // }
 
    if(!localStorage.getItem("currentUser")){
      const code = getCodeFromURL();
      setCode(code)
      getUserData(code)
    } 
    
   
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

 // TO DO --> pass setToken to header where logout will be held*
 // this could all be held in user context to make this clearner.

 // there should be a long in page because it makes this very difficult.
  if(!code) {
    if(!localStorage.getItem("currentUser")){
      console.log("I am here in useEffect for !token")
      return <Login setChangedURL={setChangedURL} removeToken={removeToken}/>
    } 
    
  }
/////////////////////////////////////////////////////////

  return (
    // <UserContextProvider>
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
                removeToken={removeToken}
              />
            )}
          />
          <Route 
            exact path="/ask"
            render={() => 
              <AskPage 
                addNewQuestion={addNewQuestion} 
                removeToken={removeToken}
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
                removeToken={removeToken}
              />}
          />
          <Route path="/community-guidelines" render={() => <CommunityGuidelines />} />
          <Route path="*" render={() => <ErrorPage type={404} />} />
        </Switch>
        <Footer />
      </div>
    // </UserContextProvider>
  );
};

export default App;