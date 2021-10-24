import React, {useState} from 'react';

interface KeywordSearchInputProps {
  updateQuestions: (type: string, query: string ) => void;
}

const KeywordSearchInput: React.FC<KeywordSearchInputProps> = (props) => {
  const [query, setQuery] = useState('');

  
  
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    
    console.log('im here!', query)
   
  
  }

  const handleSubmit = () => {
    console.log(query)
    props.updateQuestions('keyword', query)
  }
 
  return (
    <div className='KeywordSearchInput'>
      <input
        type="text" 
        value={query} 
        onChange={(event) => onChange(event)}
        placeholder='filter by keyword'
      />
    <button onClick={() => handleSubmit()}>SEARCH</button>
    </div>
    
  )
}

export default KeywordSearchInput;

  
 
 