import { QuestionDetailsObject } from "../../interfaces";
import NewComment from "../newComment/NewComment";
import CommentsContainer from "../../containers/commentsContainer/CommentsContainer";
import Header from "../header/Header";
import "../../styles/questionDetails.scss";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { UserDetails } from "../../interfaces";

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  addComment: ({}) => void | any;
  user: UserDetails;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  return (
    <div className="QuestionDetails" key={props.questionDetails.id}>
      <div className="LinksContainer--container">
        <Link to="/">
          <button className="BackButtonLink--button">Back</button>
        </Link>
        <Link to="/ask">
          <button className="AskButtonLink--button">Ask</button>
        </Link>
      </div>
      <Header headerTitle={`Question & Answers`} />
      <h3>{props.questionDetails.title}</h3>
      <p>Created on: {props.questionDetails.created_at.slice(0, 10)}</p>
      {
        <span className="user--span">
          <PersonIcon />
          <div className="detail person-title">
            {props.questionDetails.user && (
              <p>{props.questionDetails.user.title}</p>
            )}
            {props.questionDetails.user && (
              <p>{props.questionDetails.user.username}</p>
            )}
          </div>
        </span>
      }
      <p className="BodyText--p">{props.questionDetails.body}</p>
      <NewComment
        addComment={props.addComment}
        postId={props.questionDetails.id}
        user={props.user}
      />
      <CommentsContainer details={props.questionDetails} />
    </div>
  );
};

export default QuestionDetails;
