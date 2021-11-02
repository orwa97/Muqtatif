import classes from "./Search.module.scss";
import SearchBar from "./searchBar/SearchBar";
const Search = (props) => {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchIntro}>
        <spam className={classes.muqLogo}>MUQTATIF</spam>
        <p className={classes.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <SearchBar className={classes.searchBar} />
    </div>
  );
};

export default Search;
