import classes from "./SearchBar.module.scss";
import AsyncSelect from "react-select/async";
import { ReactComponent as SearchIcon } from "../../../images/SVG/search.svg";
const SearchBar = (props) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      border: "1px solid #fff",
      borderRadius: ".8rem",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      padding: "2rem 2.5rem",
      width: "auto",
      minWidth: "65rem",
      maxWidth: "108rem",
      border: "none",
      boxShadow: "none",
    }),

    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "3rem",
      color: "rgba(255, 255, 255, 0.5)",
    }),

    singleValue: (provided, state) => ({
      ...provided,
      fontSize: "1.7rem",
      color: "#fff",
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0",
    }),

    input: (provided, state) => ({
      ...provided,
      fontSize: "3rem",
      color: "#fff",
      margin: "0",
      padding: "0",
      cursor: "text",
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "rgb(15,15,15)",
      padding: "0",
    }),

    menuList: (provided, state) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    option: (provided, state) => ({
      ...provided,
      // height: "4rem",
      border: "1px solid #fff",
      backgroundColor: state.isFocused
        ? "rgba(255, 255, 255, 0.08)"
        : state.isSelected
        ? "white"
        : undefined,
      color: state.isSelected ? "#000" : undefined,
      fontSize: "1.7rem",
      margin: "0",
      transition: "all .15s",
      // whiteSpace: "nowrap",
      // overflow: "hidden",
      direction: "rtl",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
    }),

    indicatorSeparator: (provided, state) => ({
      ...provided,
      marginRight: "1.5rem",
      margin: ".5rem 1.5rem .5rem .8rem",
    }),

    noOptionsMessage: (provided, state) => ({
      ...provided,
      fontSize: "1.2rem",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: ".5rem",
      color: "#fff",
    }),
    loadingMessage: (provided, state) => ({
      ...provided,
      fontSize: "1.2rem",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: ".5rem",
      color: "#fff",
    }),
  };
  const DropdownIndicator = () => {
    return <SearchIcon className={classes.searchIcon} />;
  };

  return (
    <div>
      <AsyncSelect
        styles={customStyles}
        components={{ DropdownIndicator }}
        placeholder={props.placeholder}
        onMenuClose={props.onMenuClose}
        onInputChange={props.onInputChange}
        inputValue={props.inputValue}
        onFocus={props.onFocus}
        cacheOptions
        defaultOptions
        loadOptions={props.options}
        value={props.value}
        isSearchable={true}
        onChange={props.onChange}
        isLoading={props.isLoading}
        noOptionsMessage={() => props.noOptionsMessage}
      />
    </div>
  );
};

export default SearchBar;
