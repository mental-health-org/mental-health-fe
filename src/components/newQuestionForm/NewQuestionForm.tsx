import React from 'react'
import { Link } from "react-router-dom";

const NewQuestionForm:React.FC = () => {
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