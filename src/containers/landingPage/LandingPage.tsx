import TagSearchBar from '../../components/tagSearchBar/TagSearchBar';
import QuestionsContainer from '../../containers/questionsContainer/QuestionsContainer'
import {Tag} from '../../interfaces';
import {Link} from 'react-router-dom';
import { Question } from '../../interfaces';
import Button from '@mui/material/Button';
import './landingPage.scss';
import Header from '../../components/header/Header'

interface LandingPageProps {
  tags: Tag[];
  updateQuestions: (tag: string) => void;
  allQuestions: Question[]
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  //will pass props of tags to searchbar
  //will pass questions to questions container and search will get updateQuestions method as props to update parent landing page so it can give updated questions to container.


  return (
    <div className="LandingPage">
      <Header headerTitle={`Mental Health Org`}/>
      <h2>Have a Question?</h2>
      <Link className="ask-link" to="/ask"><Button variant="outlined" 
      className="ask-button">Ask</Button></Link>
      <br/>
      
      {/* <TagSearchBar tags={props.tags} updateQuestions={updateQuestions}/> */}
      <TagSearchBar tags={props.tags} updateQuestions={props.updateQuestions}/>
      <QuestionsContainer questions={props.allQuestions} />
    </div>
  )
}

export default LandingPage;