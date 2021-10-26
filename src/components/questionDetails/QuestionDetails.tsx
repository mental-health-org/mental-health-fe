import {QuestionDetailsObject} from '../../interfaces';
// import Button from "@mui/material/Button";
import DeleteModal from '../deleteModal/DeleteModal'
import NewComment from '../newComment/NewComment'
import CommentsContainer from '../../containers/commentsContainer/CommentsContainer';
import Header from '../header/Header';
import '../../styles/questionDetails.scss'
// import logo from '../../images/mental_health_logo1.png'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import {UserDetails} from '../../interfaces'
import {postQuestionUpvote, postQuestionDownvote} from '../../utils/util';
import QuestionVoteContainer from '../../questionVoteContainer/QuestionVoteContainer';

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  deleteQuestion: (id: number) => void;
  addComment: ({}) => void | any;
  user: UserDetails;
}

// TO DO: if the post matches the users post -- only then show delete my post button
//TO DO: add modal --> are you sure youd like to delete your post?

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  // const handleDelete = () => {
  //   console.log('handle submit')
  //   props.deleteQuestion(props.questionDetails.id)
  // }

  console.log("questionDetails props", props)
  const upVote = () => {
    //To do: make request
    console.log('upvote')
    
    // /api/v1/qvote/
    const postObj = {
      user: props.user.id,
      post: props.questionDetails.id,
      vote_type: 1,
      }

      postQuestionUpvote(postObj).then(data => console.log("here is my post upvote data", data)).catch(err => console.log(err))
  }

  const downVote = () => {
    //To do: make request
    
    console.log('downvote')

    const postObj = {
      user: props.user.id,
      post: props.questionDetails.id,
      vote_type: 1,
      }

    postQuestionDownvote(postObj).then(data => console.log("here is my post downvote data", data)).catch(err => console.log(err))
  }
  
  return (
    <div className='QuestionDetails' key={props.questionDetails.id}>

      <div className='LinksContainer--container'>

        <Link to='/'>
          {/* <img className='LogoLink--image' src={logo} alt="link to home" /> */}
          <button className='BackButtonLink--button'>Back</button>
        </Link>
        <Link to='/ask'>
          <button className='AskButtonLink--button'>Ask</button>
        </Link>
      </div>

      <Header headerTitle={`Question & Answers`} />
      <h3>{props.questionDetails.title}</h3>

      <p>Created on: {props.questionDetails.created_at.slice(0,10)}</p>
      {(<span className="user--span"><PersonIcon/><p className="detail person-title"> {props.questionDetails.user && <p>{props.questionDetails.user}</p>}</p></span>)}
      {/* {props.questionDetails.user && <p>{props.questionDetails.user}</p>} */}

      <p className='BodyText--p'>{props.questionDetails.body}</p>
      <QuestionVoteContainer questionDetails={props.questionDetails} upVote={upVote} downVote={downVote}/>
      {/* <div className='VoteBox--container'>
        <button 
          className='UpVote--button'
          onClick={() => upVote()}
        >Upvotes: {props.questionDetails.upvotes}
        </button>
        <button 
        className='DownVote--button'
        onClick={() => downVote()}
        >DownVotes: {props.questionDetails.downvotes}
        </button>
      </div> */}
    
      <NewComment addComment={props.addComment} postId={props.questionDetails.id} user={props.user}/>
      <CommentsContainer details={props.questionDetails}/>
      {/* <DeleteModal handleDelete={handleDelete}/> */}

  </div>
  )
  
}

export default QuestionDetails;

