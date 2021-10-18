import TagSearchBar from '../../components/tagSearchBar/TagSearchBar';
import QuestionsContainer from '../../containers/questionsContainer/QuestionsContainer'

interface LandingPageProps {
  tags: string[]
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  //will pass props of tags to searchbar
  return (
    <div className="LandingPage">
      LANDING PAGE
      <button></button>
      <TagSearchBar tags={props.tags}/>
      <QuestionsContainer />
    </div>
  )
}

export default LandingPage;