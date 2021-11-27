import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import TagsContainer from '../../containers/TagsContainer/TagsContainer';
import SubmissionModal from '../SubmissionModal/SubmissionModal';
import Header from '../header/Header'
import '../../styles/NewQuestionForm.scss'
import { UserContext } from '../../contexts/UserContext';
import { useCookies } from "react-cookie";


interface Question {
  title: string;
  body: string;
  tags: string[];
  user: number| any | null;
}

interface NewQuestionFormProps {
  changeIsSubmittedToTrue: () => void;
  postQuestion: (newQuestion: Question) => void;
}

const NewQuestionForm: React.FC<NewQuestionFormProps> = ({ changeIsSubmittedToTrue, postQuestion}) => {

  const { userData, updateUserData } = useContext(UserContext);
  
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [newTag, setNewTag] = useState<string>('')
    const [tags, setTags] = useState<string[]>([])


    const packageQuestion = (): Question => {
      return {
        title: title,
        body: body,
        tags: tags,
        user: userData.id
      }
    };

    // attempt to do bugFix// seems like linkedin times out which may have caused a problem but this shouldnt effect our logic. This is just making sure that the user is signed in before being able to post a quetion otherwise app will break trying to read question data without a user tied to it.
    const [cookies, setCookie] = useCookies();
    const checkIfUserStillSignedIn = () => {
      // setTimeout(() => {
      //   if(!userData || !localStorage.getItem("currentUser")) {
      //     window.location.href = "https://mental-health-fe.herokuapp.com/"
      //   }
      // }, 3000)

      setTimeout(() => {
        if(!userData || !cookies.currentUser) {
          //window.location.href = "https://mental-health-fe.herokuapp.com/"
          window.location.href = 'http://localhost:3000/'
        }
      }, 3000)
   
    }
  
    const handleSubmit = (event: React.FormEvent): void => {
      checkIfUserStillSignedIn()
      event.preventDefault()
      const newQuestion = packageQuestion()
      changeIsSubmittedToTrue()
      postQuestion(newQuestion)
      formReset()
    };

    const handleAddTag = (event: React.FormEvent): void => {
      event.preventDefault()
      setTags([ newTag, ...tags ])
      setNewTag('')
    };

    const removeTag = (i: number, event: React.FormEvent): void => {
      event.preventDefault()
      const updatedTags = [ ...tags ]
      updatedTags.splice(i, 1)
      setTags(updatedTags)
    };

    const formReset = () => {
      setTags([])
      setTitle('')
      setBody('')
    }

  return (
    <main>
      <Header headerTitle={`Ask a Question`} />
      <section className='NewQuestion--container'>
        <form className='QuestionForm--form'>
          <div className='TitleInput--container'>
            <label className='InputLabel--label'>Question</label>
            <input 
              className='TitleInput--input'
              type="text" 
              name='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className='BodyInput--container'>
            <label className='InputLabel--label'>Provide More Context</label>
            <textarea
              className='BodyInput--textarea'
              name='body'
              value={body}
              onChange={event => setBody(event.target.value)} 
            />
          </div>
          <div className='TagInput--container'>
            <label className='InputLabel--label'>Add Tags</label>
            <div className='TagInputAndButton--container'>
              <input 
                className='TagInput--input'
                type="text" 
                name="tag-input"
                value={newTag}
                onChange={event => setNewTag(event.target.value)}
              />
              <button 
                className='AddTag--button'
                onClick={event => handleAddTag(event)}>Add Tag</button>
            </div>
          </div>
          <TagsContainer allTags={tags} removeTag={removeTag}/>
          <div className='FormButtons--container'>
            <Link to='/'>
              <button className='BackHomeButton--btn'>
                <span className='BackButtonText--span'>Back</span>
              </button>
            </Link>
            <SubmissionModal handleSubmit={handleSubmit} title={title} tags={tags}/>
          </div>
        </form>
      </section>
    </main>
  )
};

export default NewQuestionForm;