import { useEffect } from "react";
import { Tag } from "../../interfaces";
import "./tagSearchBar.scss";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface TagSearchBarProps {
  tags: Tag[];
  updateQuestions: (tag: string ) => void;
}

const TagSearchBar: React.FC<TagSearchBarProps> = (props) => {
  // const options = props.tags.map(tag => tag.name)
  console.log("here are the prop tags-->", props.tags)
  const options = props.tags
  const [value, setValue] = React.useState<any>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const updateQuestionsByTag = (newInputValue: string) => {
    props.updateQuestions(value)
    setInputValue(newInputValue)
  }

  useEffect(()=> {
    props.updateQuestions(value)
  }, [inputValue, props, value])

  return (
    <div>
      <div>{`${value !== null ? `Search Results for '${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          // updateQuestionsByTag(inputValue)
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="search by tag" />}
      />
    </div>
  );
}


export default TagSearchBar;


