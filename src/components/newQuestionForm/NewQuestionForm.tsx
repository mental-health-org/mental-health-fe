import { stringify } from 'querystring';
import React, { useState } from 'react'
import { Link } from "react-router-dom";

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Question {
  id: number;
  title: string;
  body: string;
  tag: string[];
}

const topicTags = [
  'addiction',
  'depression',
  'case law',
  'anxiety',
  'child therapy'
];


const NewQuestionForm:React.FC = () => {
  // state: 
    //questions - {...}
    //title - string
    //context/body - string
    // tag - string[]
  
  // new Question making function
  // handleSubmit function

  // Eventually: some sort of mapping fuction to dynamically create options 
    //for the 'select' form element based off of a tags array. I assume the array will 
    // come from the BE and be updated when a user makes a tag - not sure how to implement users making a tag yet 

    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [tags, setTags] = useState<string[] | any>([]) // causing an error without any because the value of an input cannot be an array - needs to be string
    const [question, setQuestion] = useState<Question | any>({}) // needs to be changed
    const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)

    const packageQuestion = () => {
      return {
        id: Date.now(),
        title: title,
        body: body,
        tags: tags
      }
    }
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      const newQuestion = packageQuestion()
      setQuestion(newQuestion)
      console.log(newQuestion)
    }

    const handleChange = (event: SelectChangeEvent) => {
      
      setTags(event.target.value);
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
          <Select
          multiple
          value={tags}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {topicTags.map((tag: string) => (
            <MenuItem
              key={tag}
              value={tag}
            >
              {tag}
            </MenuItem>
          ))}
        </Select>
          {/* <select name="tag-selector" multiple={true} onChange={event => setTags(event.target.value)}>
            <option value="depression">Depression</option>
            <option value="anxiety">Anxiety</option>
            <option value="addiction">Addiction</option>
            <option value="case-law">Case Law</option>
            <option value="child-therapy">Child Therapy</option>
          </select> */}
        </div>

      <Link to='/'>
        <button onClick={event => event.preventDefault()}>Back</button>
      </Link>
        <button type='submit' onClick={event => handleSubmit(event)}>Submit</button>
      </form>
    </section>
  )
}


export default NewQuestionForm