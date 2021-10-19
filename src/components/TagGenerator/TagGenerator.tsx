import React, { useState } from 'react'

const TagGenerator = () => {
  const [userTags, setUserTags] = useState<string[]>([]);
  const [applicationTags, setApplicationTags] = useState<string[]>([]);

  const removeUserTag = (i) => {
    const newTags = [ ...userTags ];
    newTags.splice(i, 1)
    setUserTags(newTags)
  };

  const inputKeyDown = (event) => {
    const tagInputValue = e.target.value
    if(event.key === 'Enter' && tagInputValue) {
      if(userTags.find(tag => tag.toLowerCase() === tagInputValue.toLowerCase())) {
        return;
      }
      setUserTags([...userTags, tagInputValue])
    } else if (event.key === 'Backspace' && !tagInputValue) {
      removeUserTag(userTags.length - 1)
    }
  };

  const tags = userTags.map((tag, i)) => (
    <div>
      <li key={`${tag}: i`}>
        {tag}
        <button onClick={() => removeUserTag(i)}>X</button>
      </li>
      <li>
        <input type="text" onKeyDown={inputKeyDown()} />
      </li>
    </div>
    
  )


  return (
    <div>
     <ul className='input-tags'>
       {/* Map out the li's */}
     </ul>
    </div>
  )
};

export default TagGenerator