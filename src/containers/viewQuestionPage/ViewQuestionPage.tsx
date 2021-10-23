//this on useEffect will pull from our url to see which question we are at at make fetch for the question it needs
//child components: 
  //this will render comments container

//NOTE: to delete a card --> user has to click on the card from landing page to go to the individual card. If that card belongs to them, they can delete the card.
  //interface QuestionsDetailsProps: {
  //   deleteQuestion: (id: number) => void;
  // } 
  // <button onClick={() => {props.deleteQuestion(props.question.id)}}>delete</button> */}
  import { useParams } from 'react-router-dom';
  interface RouteParams {
      id: string
  }

// interface ViewQuestionPageProps {
//   id: string
// }

  const ViewQuestionPage: React.FC = () => {
    const params = useParams<RouteParams>();

    console.log("props--->", params.id)
    // const { id }= useParams();

    return <div className="ViewQuestionPage">
      VIEW QUESTION PAGE
    </div>
  }
      

export default ViewQuestionPage;