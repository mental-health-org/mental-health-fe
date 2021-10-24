// import { useEffect } from "react";


// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';


// interface KeywordSearchBarProps {
//   keywords: string[];
//   updateQuestions: (tag: string ) => void;
// }

// const KeywordSearchBar: React.FC<KeywordSearchBarProps> = (props) => {
//   // const options = props.tags.map(tag => tag.name)
  
//   const options = props.keywords
//   const [value, setValue] = React.useState<any>(options[0]);
//   const [inputValue, setInputValue] = React.useState('');
//   const [isSearchSet, setSearch] = React.useState<boolean>(false)
//   // const [searchResultsText, setSearchResultsText] = React.useState('All search Results')

//   const updateQuestionsByKeyword = (newValue: any) => {
 
//       props.updateQuestions(newValue)
//       setSearch(true)
//       if(newValue === null) {

//       }
//   }


//   return (
//     <div className='KewwordSearchBar'>
//       <div>
//         {value === null && 'All search results'}
//         {!isSearchSet && `All search results`}
//         {(value !== null && isSearchSet) && `Search Results for '${value}'`}
//          </div>
//       <br />
//       <div className='autocomplete--container'>
//         <Autocomplete
//           value={value}
//           onChange={(event: any, newValue: string | null) => {
//             setValue(newValue);
//             updateQuestionsByKeyword(newValue)
//           }}
//           inputValue={inputValue}
//           onInputChange={(event, newInputValue) => {
//             setInputValue(newInputValue);
//           }}
//           id="controllable-states-demo"
//           options={options}
//           sx={{ width: 300 }}
//           renderInput={(params) => <TextField {...params} label="search by tag" />}
//         />
//       </div>
//     </div>
//   );
// }


// export default KeywordSearchBar;



export {}