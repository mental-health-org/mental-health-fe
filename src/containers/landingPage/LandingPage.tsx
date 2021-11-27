import TagSearchBar from "../../components/tagSearchBar/TagSearchBar";
import QuestionsContainer from "../../containers/questionsContainer/QuestionsContainer";
import { Tag } from "../../interfaces";
import { Link } from "react-router-dom";
import { Question } from "../../interfaces";
import "../../styles/landingPage.scss";
import KeywordSearchInput from "../../components/keywordSearchInput/KeywordSearchInput";
import Header from '../../components/header/Header'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { UserContextProvider } from '../../contexts/UserContext'
import { UserContext } from '../../contexts/UserContext';
import {useContext} from 'react';
import { useCookies } from "react-cookie";

interface LandingPageProps {
  tags: Tag[];
  updateQuestions: (type: string, query: string) => void;
  allQuestions: Question[];
  isEmptySearch: boolean;
  isLoading: boolean;
}

const loader = <Loader
type="Puff"
color="#DA0064"
height={100}
width={100}
// timeout={3000} //3 secs
/>

const LandingPage: React.FC<LandingPageProps> = (props) => {
  const {userData} = useContext(UserContext) 

  let history = useHistory();
  const [cookies, setCookie] = useCookies();

  useEffect(()=> {
    setTimeout(() => {
      if(!userData || !localStorage.getItem("currentUser")) {
        //window.location.href = "https://mental-health-fe.herokuapp.com/"
        window.location.href = 'http://localhost:3000/'
      }
    }, 3000)
    // setTimeout(() => {
    //   if(!userData || !cookies.currentUser) {
    //     //window.location.href = "https://mental-health-fe.herokuapp.com/"
    //     window.location.href = 'http://localhost:3000/'
    //   }
    // }, 10000)



    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [])


  return (
    <div className="LandingPage">
      <Header headerTitle={'HeLP Network'} />
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
      {props.isLoading && loader}
      {props.allQuestions.length > 0 && (
        <QuestionsContainer questions={props.allQuestions} />
      )}
      {props.isEmptySearch && (
        <p>Sorry, no questions are available yet on this topic</p>
      )}
    </div>
  );
};

export default LandingPage;