import React from 'react'
import '../../styles/TagsContainer.scss'

interface TagsContainerProps {
  allTags: string[];
  removeTag: (i: number) => void;
}

const TagsContainer: React.FC<TagsContainerProps> = ({ allTags, removeTag }) => {
  const tags = allTags.map( (tag, i) => {
    return (
      <div className='UserTag--container'>
        <p className='UserTag--Text'>{tag}</p>
        <button 
          onClick={() => removeTag(i)} 
          className='AddTag--button'
        >X</button>
      </div>
      
    )
  })

  return (
    <div className='QuestionTags--container'>
      {tags}
    </div>
  )
}

export default TagsContainer
