import { Tag } from "../../interfaces";
import "./tagSearchBar.scss";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface TagSearchBarProps {
  tags: Tag[];
  updateQuestions: (type: string, query: string) => void;
}

const TagSearchBar: React.FC<TagSearchBarProps> = (props) => {
  const options = props.tags;
  const [value, setValue] = React.useState<any>(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [isSearchSet, setSearch] = React.useState<boolean>(false);

  const updateQuestionsByTag = (newValue: any) => {
    props.updateQuestions("tag", newValue);
    setSearch(true);
  };

  return (
    <div className="TagSearchBar">
      <div>
        {value === null && "All search results"}
        {!isSearchSet && `All search results`}
        {value !== null && isSearchSet && `Search Results for '${value}'`}
      </div>
      <br />
      <div className="autocomplete--container">
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
            updateQuestionsByTag(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="search by tag" />
          )}
        />
      </div>
    </div>
  );
};

export default TagSearchBar;
