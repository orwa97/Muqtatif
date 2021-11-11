import "./Select.scss";
import classNames from "classnames";
import ReactSelect from "../reactSelect/ReactSelect";

const Select = (props) => {
  // const options = props.options.map((item, i) => {
  //   return <option value={i + 1}>{item}</option>;
  // });

  return (
    <div className="container">
      {/* {props.prefix && <div className="prefix">{props.prefix}</div>} */}
      <ReactSelect options={props.options} defaultValue={props.defaultValue} />
      {/* <select
        className={classNames(
          "select",
          { "select--w-prefix": !!props.prefix },
          { "select--w-postfix": !!props.postfix }
        )}
      >
        {options}
      </select> */}
      {props.postfix && <div className="postfix">{props.postfix}</div>}
    </div>
  );
};

export default Select;
