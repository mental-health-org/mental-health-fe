//TO DO: choose react icon.
// import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { useState } from "react";
import { Tag, SearchResult } from "../../interfaces";
import SearchIcon from '@mui/icons-material/Search';

interface TagSearchBarProps {
  tags: Tag[];
  updateQuestions: (tag: string) => void;
}


const TagSearchBar: React.FC<TagSearchBarProps> = (props) => {
  const [search, setSearch] = useState<SearchResult>({
    text: "",
    suggestions: [],
  });
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(true);

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let suggestions: Tag[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = props.tags.sort().filter((v: Tag) => regex.test(v.name));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const searchByKeywordOrTag = () => {
    console.log('search by keyword')
    //RIGHT HERE IS WHERE THE REQUEST WOULD BE MADE TO GRAB NEW QUESTIONS BY TAG
    //delete and replace with the right method.
    props.updateQuestions('test')
    setSearch({text:"", suggestions: []})
  }

  const makeSuggestionSelected = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: Tag
  ) => {
    e.preventDefault();
    setIsComponentVisible(false);
    setSearch({
      text: value.name,
      suggestions: [],
    });
    searchByKeywordOrTag()
  };

  // what is this below?
  const { suggestions } = search;

  return (
    <div className="TagSearchBar">
      <div
    //do not comment out onClick. // this is causing things to break.
        onClick={() => setIsComponentVisible(false)}
      />
      <div>
        <input
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
        />
      {/* To do: if searching by something other than tag need to have a controlled input */}
        <button className="tag-search-button"><SearchIcon onClick={() => searchByKeywordOrTag()}/></button>
      </div>
      {suggestions.length > 0 && isComponentVisible && (
        <div>
          {suggestions.map((item: Tag) => (
            <div>
              <button
                key={item.id}
                onClick={(e) => makeSuggestionSelected(e, item)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagSearchBar;


