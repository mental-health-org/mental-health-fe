import TagSearchBar from '../../components/tagSearchBar/TagSearchBar';
import QuestionsContainer from '../../containers/questionsContainer/QuestionsContainer'


interface Tag {
  id: number;
  name: string;
} 

interface LandingPageProps {
  tags: Tag[]
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  //will pass props of tags to searchbar
  return (
    <div className="LandingPage">
      Search by Tag
      <button>Ask a Question</button>
      <TagSearchBar tags={props.tags}/>
      <QuestionsContainer />
    </div>
  )
}

export default LandingPage;