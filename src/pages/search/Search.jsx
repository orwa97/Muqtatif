import { useEffect, useState } from "react";
import classes from "./Search.module.scss";
import SearchBar from "./searchBar/SearchBar";
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [inputSave, setSave] = useState("");
  const [options, setOptions] = useState([]);
  const searchInputHandler = (userInput) => {
    setSearchValue(userInput);
    // console.log(searchValue);
  };

  //   getting Quran data regarding to user's input.
  useEffect(async () => {
    if (searchValue.trim().length === 0) return;
    const quranURL =
      new URL(`https://api.quran.com/api/v4/search?q=${searchValue}&size=20&page=0&language=en
`);
    const respose = await fetch(quranURL);
    const data = await respose.json();

    // mapping the quran data we got to react-select's options [{value:  , label:  }, ...]
    const ayat = data.search.results.map((item) => {
      return { value: item.text, label: item.text };
    });
    console.log(ayat);
    setOptions(ayat);
  }, [searchValue]);
  // console.log(options);
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchIntro}>
        <spam className={classes.muqLogo}>MUQTATIF</spam>
        <p className={classes.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <SearchBar
        className={classes.searchBar}
        onChange={searchInputHandler}
        inputValue={searchValue}
        placeholder={inputSave || "Search..."}
        onMenuClose={() => setSave(searchValue)}
        onFocus={() => {
          setSearchValue(inputSave);
          setSave("");
        }}
        options={options}
      />
    </div>
  );
};

export default Search;
