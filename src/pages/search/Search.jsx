import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import classes from "./Search.module.scss";
import SearchBar from "./searchBar/SearchBar";
import useAtomsGroup from "../../hooks/useAtomsGroup";

const Search = (props) => {
  const { resetAll } = useAtomsGroup();
  const [searchValue, setSearchValue] = useState("");
  const [, setSelectedValue] = useState("");
  const [inputSave, setSave] = useState("");
  const [quranData, setQuranData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noOptMessage, setNoOptMessage] = useState(null);
  const history = useHistory();
  const searchRef = React.createRef();

  /**
   * focus on the search input field after render
   * reset all atoms to thier default values
   */
  useEffect(() => {
    searchRef.current.focus();
    resetAll();
  }, []);

  const searchInputHandler = (e) => {
    setSearchValue(e);
  };

  const selectHandeler = (e) => {
    setSelectedValue(e);
    history.push(`/quran/${e.value}`);
  };

  //   getting Quran data regarding to user's input.
  useEffect(() => {
    let isSubscribed = true;
    if (searchValue.trim().length === 0) {
      setNoOptMessage(null);
      return;
    }
    if (isSubscribed) {
      setIsLoading(true);
      setNoOptMessage("No results");
    }
    const quranURL =
      new URL(`https://api.quran.com/api/v4/search?q=${searchValue}&size=20&page=0&language=en
`);
    fetch(quranURL)
      .then((res) => {
        if (res.ok === true) {
          setTimeout(() => {
            return isSubscribed ? setIsLoading(false) : null;
          }, 500);
        }
        return res.json();
      })
      .then((res) => {
        return isSubscribed ? setQuranData(res.search.results) : null;
      });
    return () => (isSubscribed = false);
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
      <header className={classes.header}>
        <div className={classes.muqLogo}>
          <h1>مُقْتَطِف</h1>
          <h6>MUQTATIF</h6>
        </div>
        <p className={classes.intro}>
          Creat beautiful images of any verse from the holey Quran.
          <br />
          <span>Start typing in arabic to get started.</span>
        </p>
      </header>

      <SearchBar
        className={classes.searchBar}
        onInputChange={searchInputHandler}
        onChange={selectHandeler}
        inputValue={searchValue}
        placeholder={inputSave || `"...ابحث عن آية  "قل الحمد لله`}
        onMenuClose={() => setSave(searchValue)}
        onFocus={() => {
          setSearchValue(inputSave);
          setSave("");
        }}
        options={loadOptions}
        isLoading={isLoading}
        noOptionsMessage={noOptMessage}
        searchRef={searchRef}
      />
    </div>
  );
};

export default Search;
