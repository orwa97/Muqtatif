import classes from "./SearchBar.module.scss";
import AsyncSelect from "react-select/async";
import { ReactComponent as SearchIcon } from "../../../images/SVG/search.svg";
const SearchBar = (props) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      border: "1px solid #fff",
      borderRadius: ".8rem",
      fontFamily: "Tajawal",
      color: "#fff",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      padding: "2rem 2.5rem",
      width: "auto",
      height: "8rem",
      minWidth: "65rem",
      maxWidth: "108rem",
      border: "none",
      boxShadow: "none",
    }),

    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "2.5rem",
      color: "rgba(255, 255, 255, 0.5)",
      textAlign: "right",
      letterSpacing: ".15rem",
      fontWeight: "400",
      marginRight: "1rem",
      marginTop: "1rem",
    }),

    singleValue: (provided, state) => ({
      ...provided,
      fontSize: "1.7rem",
      color: "#fff",
      textAlign: "right",
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
      paddingRight: ".3rem",
      // marginTop: ".8rem",
      cursor: "text",
      direction: "rtl",
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
      fontSize: "1.8rem",
      padding: ".8rem",
      paddingTop: "1.2rem",
      margin: "0",
      transition: "all .15s",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      direction: "rtl",
      cursor: "pointer",
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
    loadingIndicator: (provided, state) => ({
      ...provided,
      position: "absolute",
      left: "1.5rem",
    }),
  };
  const DropdownIndicator = () => {
    return (
      <div className={classes.iconBox}>
        <SearchIcon className={classes.searchIcon} />
      </div>
    );
  };

  return (
    <div>
      <AsyncSelect
        ref={props.searchRef}
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
