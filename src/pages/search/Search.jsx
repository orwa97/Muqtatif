import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import classes from "./Search.module.scss";
import SearchBar from "./searchBar/SearchBar";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [inputSave, setSave] = useState("");
  const [quranData, setQuranData] = useState([]);
  const [options, setOptions] = useState([]);
  const history = useHistory();
  const searchInputHandler = (e) => {
    setSearchValue(e);
  };

  const selectHandeler = (e) => {
    setSelectedValue(e.value);
    history.push(`/quran/${e.value}`);
  };

  //   getting Quran data regarding to user's input.
  useEffect(() => {
    if (searchValue.trim().length === 0) return;
    const quranURL =
      new URL(`https://api.quran.com/api/v4/search?q=${searchValue}&size=20&page=0&language=en
`);
    const data = fetch(quranURL)
      .then((res) => res.json())
      .then((res) => {
        setQuranData(res.search.results);
      });
  }, [searchValue]);
  const loadOptions = useCallback(
    async (inputValue, callback) => {
      callback(
        quranData.map((item) => {
          return { value: item.verse_key, label: item.text };
        })
      );
    },
    [quranData]
  );

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
        onInputChange={searchInputHandler}
        onChange={selectHandeler}
        inputValue={searchValue}
        placeholder={inputSave || "Search..."}
        onMenuClose={() => setSave(searchValue)}
        onFocus={() => {
          setSearchValue(inputSave);
          setSave("");
        }}
        options={loadOptions}
        value={options.find((obj) => obj.value === selectedValue)}
      />
    </div>
  );
};

export default Search;
