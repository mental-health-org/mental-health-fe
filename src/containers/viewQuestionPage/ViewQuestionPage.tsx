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
    setAllQuestions: ([]) => void;
  }

  const ViewQuestionPage: React.FC<ViewQuestionPageProps> = (props) => {
    const params = useParams<RouteParams>();
    const [details, setDetails] = useState<any>(null)

    const addComment = (newComment: {}): void => {
      postNewComment(newComment)
      .then(() => updateComments(details.id))
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
  
    useEffect(() => {
      fetchQuestionByID(params.id).then(data => setDetails(data))
    }, [params.id])

    return (
      <div className="ViewQuestionPage--container">
        {details && 
          <QuestionDetails 
            questionDetails={details} 
            addComment={addComment}
            addQuestionVote={addQuestionVote}
            addResponseVote={addResponseVote}
          />}
      </div>
    )
  }
      
export default ViewQuestionPage;