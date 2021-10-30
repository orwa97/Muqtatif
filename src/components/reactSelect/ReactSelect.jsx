import Select from "react-select";
import "./ReactSelect.scss";

const ReactSelect = () => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      width: "18rem",
      border: "none",
    }),
  };

  return (
    <Select
      styles={customStyles}
      isSearchable={true}
      isClearable={true}
      options={[
        { value: "a", label: "a" },
        { value: "b", label: "b" },
        { value: "c", label: "c" },
      ]}
    />
  );
};

export default ReactSelect;
