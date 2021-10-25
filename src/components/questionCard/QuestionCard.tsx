import { Question } from "../../interfaces";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./questionCard.scss";
import Button from "@mui/material/Button";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  let history = useHistory();

  const redirect = (id: number) => {
    console.log("in redirect");
    const url = `/question${id}`;
    history.push(url);
  };

  const dateCreated = props.question.updated_at.slice(0,10)

  return (
    // <div className="QuestionCard" key={props.question.id} onClick={() => redirect(props.question.id)}>
    <div className="QuestionCard" key={props.question.id}>
      <h2 className="questionCard--h2">{props.question.title}</h2>
      <p>{props.question.body.slice(0, 60)} ...</p>
      <p className="postDate">Post Date: {dateCreated}</p>
      {/* <p>{props.question.responses} responses</p> */}

      <button
        className="read--btn"
        onClick={() => redirect(props.question.id)}
      >
        READ
      </button>
    </div>
  );
};

export default QuestionCard;
