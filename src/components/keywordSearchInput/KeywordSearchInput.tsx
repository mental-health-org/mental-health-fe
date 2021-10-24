import React, {useState} from 'react';

interface KeywordSearchInputProps {
  updateQuestions: (type: string, query: string ) => void;
}

const KeywordSearchInput: React.FC<KeywordSearchInputProps> = (props) => {
  const [query, setQuery] = useState('');
  const [searchIsDisabled, setSearchIsDisabled] = useState<boolean>(true)
  const [resetIsDisabled, setResetIsDisabled] = useState<boolean>(true)


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchIsDisabled(false)
    setQuery(event.target.value);
    console.log('im here!', query)
   
  }

  const handleSubmit = (type: string) => {
    console.log(query)
    props.updateQuestions('keyword', query)
    setQuery('')

    if(type === 'reset') {
      props.updateQuestions('reset', query)
    }
    setResetIsDisabled(false)
    setSearchIsDisabled(true)

  }
 
  return (
    <div className='KeywordSearchInput'>
      <input
        type="text" 
        value={query} 
        onChange={(event) => onChange(event)}
        placeholder='filter by title'
      />
    <button disabled={searchIsDisabled}onClick={() => handleSubmit('search')}>SEARCH</button>
    <button disabled={resetIsDisabled} onClick={() => handleSubmit('reset')}>RESET</button>
    </div>
    
  )
}

export default KeywordSearchInput;

  
 
 