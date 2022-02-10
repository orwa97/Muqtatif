import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import classes from "./Search.module.scss";
import SearchBar from "./searchBar/SearchBar";
import useAtomsGroup from "../../hooks/useAtomsGroup";

const Search = (props) => {
  const { resetAll } = useAtomsGroup();
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [inputSave, setSave] = useState("");
  const [quranData, setQuranData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noOptMessage, setNoOptMessage] = useState(null);
  const history = useHistory();

  useEffect(() => {
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
    const data = fetch(quranURL)
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
      <div className={classes.searchIntro}>
        <span className={classes.muqLogo}>MUQTATIF</span>
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
        isLoading={isLoading}
        noOptionsMessage={noOptMessage}
      />
    </div>
  );
};

export default Search;
