import { stringify } from 'querystring';
import React, { useState } from 'react'
import { Link } from "react-router-dom";


const NewQuestionForm:React.FC = () => {
  // state: 
    //questions - [{...}, {...}, ...]
    //title - string
    //context/body - string
    // tags - string[]
  
  // new Question making function
  // handleSubmit function

  // Eventually: some sort of mapping fuction to dynamically create options 
    //for the 'select' form element based off of a tags array. I assume the array will 
    // come from the BE and be updated when a user makes a tag - not sure how to implement users making a tag yet 

    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [tags, setTags] = useState<string[]>([])
    const [questions, setQuestions] = useState<{id: number, title: string, body: string, tags: string}[]>([])

    const packageQuestion = () => {

    }

    const handleSelectorChange = () => {

    }
  
    const handleSubmit = (event: React.FormEvent) => {

    }

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
          />
        </div>

        <div>
          <label>Provide More Context</label>
          <input 
            type="text"
            name='body'
            value={body}
            onChange={event => setBody(event.target.value)} 
          />
        </div>

        <div>
          <label>Tag Your Question</label>
          <select name="tag-selector" multiple={true} onChange={handleSelectorChange}>
            <option value="depression">Depression</option>
            <option value="anxiety">Anxiety</option>
            <option value="addiction">Addiction</option>
            <option value="case-law">Case Law</option>
            <option value="child-therapy">Child Therapy</option>
          </select>
        </div>

      <Link to='/'>
        <button>Back</button>
      </Link>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default NewQuestionForm