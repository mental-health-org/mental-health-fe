import React from 'react'
import '../../styles/TagsContainer.scss'

interface TagsContainerProps {
  allTags: string[];
  removeTag: (i: number, event: React.FormEvent) => void;
}

const TagsContainer: React.FC<TagsContainerProps> = ({ allTags, removeTag }) => {
  const tags = allTags.map( (tag, i) => {
    return (
      <div className='UserTagPill--container'>
        <p className='UserTagPill--text'>{tag}</p>
        <button 
          onClick={event => removeTag(i, event)} 
          className='RemoveTag--button'
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
