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

    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [tags, setTags] = useState<string[]>([])

    const packageQuestion = () => {

    }
  
    const handleSubmit = (event: React.FormEvent) => {

    }

  return (
    <section>
      <div>Progress Bar Here</div>
      <form>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
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