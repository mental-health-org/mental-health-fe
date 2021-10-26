import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {fetchQuestionByID, postQuestionVote, postResponseVote} from '../../utils/util';
import QuestionDetails from '../../components/questionDetails/QuestionDetails'
import '../../styles/ViewQuestionPage.scss'
import {postNewComment} from '../../utils/util'

  interface RouteParams {
      id: string;
  }

  interface ViewQuestionPageProps {
    deleteQuestion: (id: number) => void;
    setAllQuestions: ([]) => void;
  }

  const ViewQuestionPage: React.FC<ViewQuestionPageProps> = (props) => {
    const params = useParams<RouteParams>();
    const [details, setDetails] = useState<any>(null)

    const addComment = (newComment: {}): void => {
      postNewComment(newComment)
      updateComments(details.id)
    }

    const updateComments = (id: number) => {
      fetchQuestionByID(id).then(data => {
        setDetails(data)
      })
    }

    const addQuestionVote = (questionVote: {}) => {
      console.log(questionVote)
      postQuestionVote(questionVote)
      updateQuestion()
    }

    const addResponseVote = () => {

    }

    const updateQuestion = () => {
      fetchQuestionByID(params.id).then(data => {
        setDetails(data)
      })
    }
  
    useEffect(() => {
      fetchQuestionByID(params.id).then(data => console.log("questionDetails data-->", data))
      fetchQuestionByID(params.id).then(data => setDetails(data))
    }, [params.id])

    return (
      <div className="ViewQuestionPage--container">
        {details && 
          <QuestionDetails 
            questionDetails={details} 
            deleteQuestion={props.deleteQuestion} 
            addComment={addComment}
            addQuestionVote={addQuestionVote}
          />}
      </div>
    )
  }
      
export default ViewQuestionPage;