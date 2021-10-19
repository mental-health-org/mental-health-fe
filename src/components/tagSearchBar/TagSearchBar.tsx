//TO DO: choose react icon.
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { useState } from "react";
import { Tag, SearchResult } from "../../interfaces";

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
    //RIGHT HERE IS WHERE THE REQUEST WOULD BE MADE TO GRAB NEW QUESTIONS BY TAG
    //delete and replace with the right method.
    props.updateQuestions('test')
  };

  // what is this below?
  const { suggestions } = search;

  return (
    <div className="TagSearchBar">
      {/* <div
    //do not comment out onClick. // this is causing things to break.
        onClick={() => setIsComponentVisible(false)}
        style={{
          display: isComponentVisible ? "block" : "none",
          width: "200vw",
          height: "200vh",
          backgroundColor: "transparent",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0
        }}
      /> */}
      <div>
        <input
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
        />
        <FaArrowDown />
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
