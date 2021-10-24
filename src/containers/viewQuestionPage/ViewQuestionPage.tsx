//this on useEffect will pull from our url to see which question we are at at make fetch for the question it needs
//child components: 
  //this will render comments container

//NOTE: to delete a card --> user has to click on the card from landing page to go to the individual card. If that card belongs to them, they can delete the card.

  import { useParams } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import {fetchQuestionByID} from '../../utils/util';
  import QuestionDetails from '../../components/questionDetails/QuestionDetails'
  import '../../styles/ViewQuestionPage.scss'


  interface RouteParams {
      id: string;
  }

  interface ViewQuestionPageProps {
    deleteQuestion: (id: number) => void;
  }

  const ViewQuestionPage: React.FC<ViewQuestionPageProps> = (props) => {
    const params = useParams<RouteParams>();
    const [details, setDetails] = useState<any>(null)

    console.log("props--->", params.id)
    // const { id }= useParams();
  

    useEffect(() => {
      fetchQuestionByID(params.id).then(data => setDetails(data))
    }, [params.id])

    return (
      <div className="ViewQuestionPage">
        {details && <QuestionDetails questionDetails={details} deleteQuestion={props.deleteQuestion}/>}
      </div>
    )
  }
      

export default ViewQuestionPage;