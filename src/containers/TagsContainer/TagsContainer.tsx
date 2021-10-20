import React from 'react'

interface TagsContainerProps {
  allTags: string[]
}

const TagsContainer: React.FC<TagsContainerProps> = ({ allTags }) => {
  const tags = allTags.map( tag => {
    return (
      <p className='user-tag'>{tag}</p>
    )
  })

  return (
    <div className='question-tags-container'>
      {tags}
    </div>
  )
}

export default TagsContainer
