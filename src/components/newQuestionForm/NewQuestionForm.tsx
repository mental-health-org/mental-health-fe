import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TagsContainer from '../../containers/TagsContainer/TagsContainer';
import SubmissionModal from '../SubmissionModal/SubmissionModal'
import '../../styles/NewQuestionForm.scss'

interface Question {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

interface NewQuestionFormProps {
  changeIsSubmittedToTrue: () => void;
  addQuestion: (newQuestion: Question) => void;
}

const NewQuestionForm: React.FC<NewQuestionFormProps> = ({ changeIsSubmittedToTrue, addQuestion }) => {
  
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [newTag, setNewTag] = useState<string>('')
    const [tags, setTags] = useState<string[] | any>([])

    const packageQuestion = (): Question => {
      return {
        id: Date.now(),
        title: title,
        body: body,
        tags: tags
      }
    };
  
    const handleSubmit = (event: React.FormEvent): void => {
      event.preventDefault()
      const newQuestion = packageQuestion()
      changeIsSubmittedToTrue()
      addQuestion(newQuestion)
      setTags([])
      setTitle('')
      setBody('')
    };

    const handleAddTag = (event: React.FormEvent): void => {
      event.preventDefault()
      setTags([ newTag, ...tags ])
      setNewTag('')
    };

    //disbale remove button until there is text in the tag input
    const removeTag = (i: number, event: React.FormEvent): void => {
      event.preventDefault()
      const updatedTags = [ ...tags ]
      updatedTags.splice(i, 1)
      setTags(updatedTags)
    };

  return (
    <main>
      <header className='Header'>Header!!!</header>
      <section className='NewQuestion--container'>
        <div className='ProgressBar--container'>Progress Bar Here</div>
        <form className='QuestionForm--form'>
          <div className='TitleInput--container'>
            <label>Question</label>
            <input 
              className='TitleInput--input'
              type="text" 
              name='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
              
            />
          </div>

          <div className='BodyInput--container'>
            <label>Provide More Context</label>
            <textarea
              className='BodyInput--textarea'
              name='body'
              value={body}
              onChange={event => setBody(event.target.value)} 
            />
          </div>

          <div className='TagInput--container'>
            <label>Add Tags</label>
                <div className='TagInputAndButton--container'>
                <input 
                  className='TagInput--input'
                  type="text" 
                  name="tag-input"
                  value={newTag}
                  onChange={event => setNewTag(event.target.value)}
                />
                <button 
                  //only allow addTag when input has value !== ''
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
            <SubmissionModal handleSubmit={handleSubmit}/>
          </div>
          
        </form>
      </section>
    </main>
    
  )
};

export default NewQuestionForm;
