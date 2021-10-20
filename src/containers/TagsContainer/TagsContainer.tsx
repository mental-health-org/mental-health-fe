import React from 'react'

interface TagsContainerProps {
  allTags: string[]
}

const TagsContainer: React.FC<TagsContainerProps> = ({ allTags }) => {

  return (
    <div className='question-tags-container'>
      Tags go HERE
    </div>
  )
}

export default TagsContainer
