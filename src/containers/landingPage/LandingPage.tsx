import TagSearchBar from '../../components/tagSearchBar/TagSearchBar';
import QuestionsContainer from '../../containers/questionsContainer/QuestionsContainer'
import {Tag} from '../../interfaces';
import {Link} from 'react-router-dom';
import { Question } from '../../interfaces';
import {useEffect, useState} from 'react';

interface LandingPageProps {
  tags: Tag[]
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  //will pass props of tags to searchbar
  //will pass questions to questions container and search will get updateQuestions method as props to update parent landing page so it can give updated questions to container.

  //we may want the option to save all questions to local storage so we don't have to fetch again after a user decides to go back to just view all posts.
  // we may want an option to "view feed again after a user filtered by tag"

  const [allQuestions, setAllQuestions] = useState<Question[]>([]);

useEffect(() => {
  setAllQuestions([
         {
          id: 1,
          title: "Need Help",
          responses: 10,
          tags: ['addiction', 'depression']
         },
         {
           id: 2,
           title: "Legal question",
           responses: 15,
            tags: ['addiction', 'sadage']
         },
         {
            id: 3,
            title: "How do I?",
            responses: 20,
            tags: ['addiction']
         }])
}, [])

  // const updateQuestions = (tag) => {
  //   //will make a fetch request by tag and reset questions.
  // }

  return (
    <div className="LandingPage">
      <h2>LANDING PAGE</h2>
      <Link to="/ask"><button>Ask a Question</button></Link>
      <br/>
      Search by Tag
      {/* <TagSearchBar tags={props.tags} updateQuestions={updateQuestions}/> */}
      <TagSearchBar tags={props.tags}/>
      <QuestionsContainer questions={allQuestions}/>
    </div>
  )
}

export default LandingPage;