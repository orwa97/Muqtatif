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
      width: "25rem",
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
  };

  return (
    <Select styles={customStyles} isSearchable={true} options={props.options} />
  );
};

export default ReactSelect;
