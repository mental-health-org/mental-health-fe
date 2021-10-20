import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TagsContainer from '../../containers/TagsContainer/TagsContainer';
import SubmissionModal from '../SubmissionModal/SubmissionModal'

interface Question {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

interface NewQuestionFormProps {
  changeIsSubmittedToFalse: () => void;
  addQuestion: (newQuestion: Question) => void;
}

const NewQuestionForm: React.FC<NewQuestionFormProps> = ({ changeIsSubmittedToFalse, addQuestion }) => {
  
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
      changeIsSubmittedToFalse()
      // setQuestion(newQuestion)
      addQuestion(newQuestion)
      setTags([])
      setTitle('')
      setBody('')
    };

    const handleAddTag = (event: React.FormEvent): void => {
      event.preventDefault()
      setTags([...tags, newTag])
      setNewTag('')
    };

    const removeTag = (i: number): void => {
      const updatedTags = [ ...tags ]
      updatedTags.splice(i, 1)
      setTags(updatedTags)
    };

  return (
    <section>
      <div>Progress Bar Here</div>
      <form>

        <div>
          <label>Question</label>
          <input 
            type="text" 
            name='title'
            value={title}
            onChange={event => setTitle(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Provide More Context</label>
          <textarea
            name='body'
            value={body}
            onChange={event => setBody(event.target.value)} 
          />
        </div>

        <div>
          <label>Add Tags</label>
          <input 
            type="text" 
            name="tag-input"
            value={newTag}
            onChange={event => setNewTag(event.target.value)}
          />
          <button onClick={event => handleAddTag(event)}>Add Tag</button>
        </div>

        <TagsContainer allTags={tags} removeTag={removeTag}/>

        <Link to='/'>
          <button >Back</button>
        </Link>
        <SubmissionModal />
      </form>
    </section>
  )
};

export default NewQuestionForm;
