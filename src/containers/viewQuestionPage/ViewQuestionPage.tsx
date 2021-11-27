import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import {fetchQuestionByID, postQuestionVote, postResponseVote, removeResponse} from '../../utils/util';
import QuestionDetails from '../../components/questionDetails/QuestionDetails'
import '../../styles/ViewQuestionPage.scss'
import {postNewComment} from '../../utils/util'
// import {UserDetails} from '../../interfaces'
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react';


  interface RouteParams {
      id: string;
  }

  interface ViewQuestionPageProps {
    setAllQuestions: ([]) => void;
    fetchQuestionsAfterNewComment:() => void;
    deleteQuestion: (id: number) => void;
  }

  const ViewQuestionPage: React.FC<ViewQuestionPageProps> = (props) => {
    const {userData} = useContext(UserContext) 
    const params = useParams<RouteParams>();
    const [details, setDetails] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isDeleted, setIsDeleted] = useState<boolean>(false)

    const addComment = (newComment: {}): void => {
      postNewComment(newComment)
      .then(() => updateComments(details.id))
      .then(() => props.fetchQuestionsAfterNewComment())
    }

    const updateComments = (id: number) => {
      fetchQuestionByID(id).then(data => {
        setDetails(data)
      })
    }

    const addQuestionVote = (questionVote: {}) => {
      postQuestionVote(questionVote)
      .then(() =>  updateQuestion())
    }

    const addResponseVote = (responseVote: {}) => {
      postResponseVote(responseVote)
      .then(() => updateQuestion())
    }

    const updateQuestion = () => {
      fetchQuestionByID(params.id).then(data => {
        setDetails(data)
      })
    }

    const updateDeleteStatus = () => {
      setIsDeleted(true)
    }

    const deleteResponse = (id: number): void => {
      if(window.confirm('Are you sure that you want to delete this response forever?')) {
        removeResponse(id)
        .catch(err => console.log(err))
        .then(() => updateQuestion())
        .then(() => props.fetchQuestionsAfterNewComment())
      }
    }
    
    useEffect(() => {
      setTimeout(() => {
        if(!userData || !localStorage.getItem("currentUser")) {
          window.location.href = "https://mental-health-fe.herokuapp.com/"
          // window.location.href = 'http://localhost:3000/'
        }
      }, 3000)
      
    }, [])
  
    useEffect(() => {
      fetchQuestionByID(params.id).then(data => setDetails(data))
      .then(() => setIsLoading(false))
    }, [])

    return (
      <div className="ViewQuestionPage--container">
        {isDeleted && <Redirect to='/' />}
        {details && 
          <QuestionDetails 
            questionDetails={details} 
            addComment={addComment}
            addQuestionVote={addQuestionVote}
            addResponseVote={addResponseVote}
            fetchQuestionsAfterNewComment={props.fetchQuestionsAfterNewComment}
            isLoading={isLoading}
            updateQuestion={updateQuestion}
            deleteQuestion={props.deleteQuestion}
            deleteResponse={deleteResponse}
            updateDeleteStatus={updateDeleteStatus}
          />}
      </div>
    )
  }
      
export default ViewQuestionPage;