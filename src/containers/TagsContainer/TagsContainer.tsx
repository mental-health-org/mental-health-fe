import React from 'react'

interface TagsContainerProps {
  allTags: string[];
  removeTag: (i: number) => void;
}

const TagsContainer: React.FC<TagsContainerProps> = ({ allTags, removeTag }) => {
  const tags = allTags.map( (tag, i) => {
    return (
      <div className='user-tag-container'>
        <p className='user-tag-text'>{tag}</p>
        <button onClick={() => removeTag(i)}>X</button>
      </div>
      
    )
  })

  return (
    <div className='question-tags-container'>
      {tags}
    </div>
  )
}

export default TagsContainer
