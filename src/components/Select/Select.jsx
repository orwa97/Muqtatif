import "./Select.scss";
import ReactSelect from "../reactSelect/ReactSelect";

const Select = (props) => {
  return (
    <div className="container">
      <ReactSelect
        options={props.options}
        defaultValue={props.defaultValue}
        onSelect={props.onSelect}
      />

      {props.postfix && <div className="postfix">{props.postfix}</div>}
    </div>
  );
};

export default Select;
