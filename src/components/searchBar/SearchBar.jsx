import Button from "../button/Button";
import classes from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../images/SVG/search.svg";
const SearchBar = (props) => {
  const searchResults = props.results.map((item) => (
    <option value={item}>{item}</option>
  ));
  return (
    <div className={classes.searchBar}>
      <input
        list="search"
        className={classes.searchInput}
        type="search"
        id={props.id}
        placeholder={props.placeholder}
      ></input>
      <datalist id="search">{searchResults}</datalist>
      <button className={classes.searchBtn}>
        {<SearchIcon className={classes.searchIcon} />}
      </button>
    </div>
  );
};

export default SearchBar;
