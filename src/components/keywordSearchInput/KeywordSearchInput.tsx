import React, { useState } from "react";
import "./keywordSearchInput.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withTheme } from "@emotion/react";

interface KeywordSearchInputProps {
  updateQuestions: (type: string, query: string) => void;
}

const styles = {
  largeIcon: {
    width: 52,
    height: 51,
    color: 'white',
  },
};

const KeywordSearchInput: React.FC<KeywordSearchInputProps> = (props) => {
  const [query, setQuery] = useState("");
  const [searchIsDisabled, setSearchIsDisabled] = useState<boolean>(true);
  const [resetIsDisabled, setResetIsDisabled] = useState<boolean>(true);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchIsDisabled(false);
    setQuery(event.target.value);
  };

  const handleSubmit = (type: string) => {
    props.updateQuestions("keyword", query);
    setQuery("");
    if (type === "reset") {
      props.updateQuestions("reset", query);
    }
    setResetIsDisabled(false);
    setSearchIsDisabled(true);
  };

  return (
    <div className="KeywordSearchInput">
      <div className="filterByTitle--input">
        <input
          className='SearchTitle--input'
          type="text"
          value={query}
          onChange={(event) => onChange(event)}
          placeholder="filter by title"
        />
        <button
          className="search--btn"
          disabled={searchIsDisabled}
          onClick={() => handleSubmit("search")}
        >
          <SearchRoundedIcon style={styles.largeIcon} />
        </button>
      </div>
      <button
        className="reset--btn"
        disabled={resetIsDisabled}
        onClick={() => handleSubmit("reset")}
      >
        RESET SEARCH
      </button>
    </div>
  );
};

export default KeywordSearchInput;
