import classes from "./SearchBar.module.scss";
import Select from "react-select";
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
      //   fontSize: "2rem",
      //   margin: "0",
      //   border: "1px solid #fff",
      padding: "0",
    }),

    menuList: (provided, state) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    option: (provided, state) => ({
      ...provided,
      border: "1px solid #fff",
      //   borderBottom: "1px solid #fff",
      //   margin: "0",
      backgroundColor: state.isFocused
        ? "rgba(255, 255, 255, 0.08)"
        : state.isSelected
        ? "white"
        : undefined,
      color: state.isSelected ? "#000" : undefined,
      fontSize: "1.7rem",
      margin: "0",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      cursor: "pointer",
    }),

    indicatorSeparator: (provided, state) => ({
      ...provided,
      marginRight: "1.5rem",
      margin: ".5rem 1.5rem .5rem .8rem",
    }),
  };
  const DropdownIndicator = () => {
    return <SearchIcon className={classes.searchIcon} />;
  };

  return (
    <div>
      <Select
        styles={customStyles}
        components={{ DropdownIndicator }}
        placeholder={props.placeholder}
        onMenuClose={props.onMenuClose}
        onInputChange={props.onInputChange}
        inputValue={props.inputValue}
        onFocus={props.onFocus}
        options={props.options || [{ value: 0, label: "Loading..." }]}
        value={props.value}
        isSearchable={true}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBar;
