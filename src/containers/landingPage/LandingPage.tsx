import TagSearchBar from "../../components/tagSearchBar/TagSearchBar";
import QuestionsContainer from "../../containers/questionsContainer/QuestionsContainer";
import { Tag } from "../../interfaces";
import { Link } from "react-router-dom";
import { Question } from "../../interfaces";
import "./landingPage.scss";
import KeywordSearchInput from "../../components/keywordSearchInput/KeywordSearchInput";

interface LandingPageProps {
  tags: Tag[];
  updateQuestions: (type: string, query: string) => void;
  allQuestions: Question[];
  isEmptySearch: boolean;
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  return (
    <div className="LandingPage">
      <h2 className="landingPage--h2">Have a Question?</h2>
      <Link className="ask-link" to="/ask">
        <button className="ask--btn">Ask</button>
      </Link>
      <br />
      {props.tags.length > 0 && (
        <TagSearchBar
          tags={props.tags}
          updateQuestions={props.updateQuestions}
        />
      )}
      <KeywordSearchInput updateQuestions={props.updateQuestions} />
      {props.allQuestions.length > 0 && (
        <QuestionsContainer questions={props.allQuestions} />
      )}
      {props.isEmptySearch && (
        <p>Sorry, no questions are available for this query. </p>
      )}
    </div>
  );
};

export default LandingPage;
