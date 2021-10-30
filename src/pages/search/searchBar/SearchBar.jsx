import classes from "./SearchBar.module.scss";
import AsyncSelect from "react-select/async";
const SearchBar = (props) => {
  return <AsyncSelect cacheOptions defaultOptions loadOptions />;
};

export default SearchBar;
