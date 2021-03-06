import Select from "react-select";
import "./ReactSelect.scss";

const ReactSelect = (props) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      border: "1px solid #fff",
      borderRadius: ".3rem",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      padding: ".3rem",
      width: "35rem",
      border: "none",
      boxShadow: "none",
    }),

    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "1.7rem",
    }),

    singleValue: (provided, state) => ({
      ...provided,
      fontSize: "1.7rem",
      color: "#fff",
    }),

    input: (provided, state) => ({
      ...provided,
      fontSize: "1.7rem",
      color: "#fff",
      margin: "0",
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
      border: "1px solid #fff",
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
  };

  return (
    <Select
      styles={customStyles}
      isSearchable={true}
      options={props.options}
      defaultValue={props.defaultValue}
      onChange={props.onSelect}
    />
  );
};

export default ReactSelect;
