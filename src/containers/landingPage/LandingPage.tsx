import TagSearchBar from '../../components/tagSearchBar/TagSearchBar';
import QuestionsContainer from '../../containers/questionsContainer/QuestionsContainer'
import {Tag} from '../../interfaces';
import {Link} from 'react-router-dom';
import { Question } from '../../interfaces';
import Button from '@mui/material/Button';
import './landingPage.scss';
import KeywordSearchInput from '../../components/keywordSearchInput/KeywordSearchInput'

interface LandingPageProps {
  tags: Tag[];
  updateQuestions: (type: string, query: string ) => void;
  allQuestions: Question[]
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  //will pass props of tags to searchbar
  //will pass questions to questions container and search will get updateQuestions method as props to update parent landing page so it can give updated questions to container.

  console.log("landing page is being rerendered!")

  return (
    <div className="LandingPage">
      <h2 className="landingPage--h2">Have a Question?</h2>
      <Link className="ask-link" to="/ask"><button
      className="ask--btn">Ask</button></Link>
      <br/>
      
      {/* <TagSearchBar tags={props.tags} updateQuestions={updateQuestions}/> */}

      {props.tags.length > 0 && <TagSearchBar tags={props.tags} updateQuestions={props.updateQuestions}/>}

      <KeywordSearchInput updateQuestions={props.updateQuestions}/>
      
      {props.allQuestions.length > 0 && <QuestionsContainer questions={props.allQuestions} />}
      {props.allQuestions.length < 0 && <p>Sorry, no questions for this tag. Add one here! (insert link) </p>}
    </div>
  )
}

export default LandingPage;