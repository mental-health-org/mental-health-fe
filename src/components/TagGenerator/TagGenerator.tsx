import React, { useState } from 'react'

const TagGenerator = () => {
  const [userTags, setUserTags] = useState<string[]>([]);
  const [applicationTags, setApplicationTags] = useState<string[]>([]);

  const removeUserTag = (event: React.FormEvent, i: number) => {
    event.preventDefault()
    const newTags = [ ...userTags ];
    newTags.splice(i, 1)
    setUserTags(newTags)
  };

  const inputKeyDown = (event: InputEvent | any /* Need to fix this later */) => {
    const tagInputValue = event.target.value;
    if (event.key === 'Enter' && tagInputValue) {
      if (userTags.find(tag => tag.toLowerCase() === tagInputValue.toLowerCase())) {
        return;
      }
      setUserTags([...userTags, tagInputValue]);
    } else if (event.key === 'Backspace' && !tagInputValue) {
      const remover = (userTags.length - 1)
      removeUserTag(event, remover);
    }
  };

  // const allTags = userTags.map((tag, i) => {
  //   return (
  //     <div>
  //       <li key={`${tag}: i`}>
  //         {tag}
  //         <button onClick={(event) => removeUserTag(event, i)}>X</button>
  //       </li>
  //       <li>
  //         <input type="text" onKeyDown={event => inputKeyDown(event)} />
  //       </li>
  //     </div>
  //   )
  // };

  return (
    // <div>
    //   <ul className='input-tags'>
    //     { userTags.map((tag, i) => (
    //       <li key={i}>
    //         {tag}
    //         <button onClick={(event) => removeUserTag(event, i)}>X</button>
    //       </li>
    //     ) }
    //   </ul>
    // </div>
  )
};

export default TagGenerator