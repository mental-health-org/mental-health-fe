import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {fetchQuestionByID} from '../../utils/util';
import QuestionDetails from '../../components/questionDetails/QuestionDetails'
import '../../styles/ViewQuestionPage.scss'
import {postNewComment} from '../../utils/util'
import {UserDetails} from '../../interfaces'

  interface RouteParams {
      id: string;
  }

  interface ViewQuestionPageProps {
    setAllQuestions: ([]) => void;
    user: UserDetails;
  }

  const ViewQuestionPage: React.FC<ViewQuestionPageProps> = (props) => {
    const params = useParams<RouteParams>();
    const [details, setDetails] = useState<any>(null)

    const addComment = (newComment: {}): void => {
      postNewComment(newComment)
      updateComments(details.id)
    }

    // const refetchQuestionDetails = () => {
    //   console.log("here--->", details)
    //   fetchQuestionByID(details.id).then(data => {
    //     console.log("question data", data)
    //     setDetails(data)
    //   })
    // }

    const updateComments = (id: number) => {
      fetchQuestionByID(id).then(data => {
        console.log("question data", data)
        setDetails(data)
      })
    }
  
    useEffect(() => {
      fetchQuestionByID(params.id).then(data => console.log("questionDetails data-->", data))
      fetchQuestionByID(params.id).then(data => setDetails(data))
    }, [params.id])

    return (
      <div className="ViewQuestionPage--container">
        {details && <QuestionDetails questionDetails={details} addComment={addComment} user={props.user} />}
      </div>
    )
  }
      
export default ViewQuestionPage;