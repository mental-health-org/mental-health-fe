//this on useEffect will pull from our url to see which question we are at at make fetch for the question it needs
//child components: 
  //this will render comments container

//NOTE: to delete a card --> user has to click on the card from landing page to go to the individual card. If that card belongs to them, they can delete the card.
  //interface QuestionsDetailsProps: {
  //   deleteQuestion: (id: number) => void;
  // } 
  // <button onClick={() => {props.deleteQuestion(props.question.id)}}>delete</button> */}
  import { useParams } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import {fetchQuestionByID} from '../../utils/util';
  import QuestionDetails from '../../components/questionDetails/QuestionDetails'
  import {QuestionDetailsObject} from '../../interfaces'

  interface RouteParams {
      id: string
  }

  const ViewQuestionPage: React.FC = () => {
    const params = useParams<RouteParams>();
    const [details, setDetails] = useState<any>(null)

    console.log("props--->", params.id)
    // const { id }= useParams();

    useEffect(() => {
      fetchQuestionByID(params.id).then(data => console.log(data))
      fetchQuestionByID(params.id).then(data => setDetails(data))
    }, [params.id])

    return <div className="ViewQuestionPage">
      <QuestionDetails questionDetails={details}/>
    </div>
  }
      

export default ViewQuestionPage;