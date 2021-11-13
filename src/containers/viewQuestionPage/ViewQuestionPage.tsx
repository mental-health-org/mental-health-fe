import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {fetchQuestionByID, postQuestionVote, postResponseVote} from '../../utils/util';
import QuestionDetails from '../../components/questionDetails/QuestionDetails'
import '../../styles/ViewQuestionPage.scss'
import {postNewComment} from '../../utils/util'
import {UserDetails} from '../../interfaces'

  interface RouteParams {
      id: string;
  }

  interface ViewQuestionPageProps {
    setAllQuestions: ([]) => void;
    fetchQuestionsAfterNewComment:() => void;
    delete: (id: number) => void
    user: UserDetails;
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
            user={props.user}
            questionDetails={details} 
            addComment={addComment}
            addQuestionVote={addQuestionVote}
            addResponseVote={addResponseVote}
            fetchQuestionsAfterNewComment={props.fetchQuestionsAfterNewComment}
            delete={props.delete}
          />}
      </div>
    )
  }
      
export default ViewQuestionPage;