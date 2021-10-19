import "./Select.scss";
import classNames from "classnames";

const Select = (props) => {
  const options = props.options.map((item, i) => {
    return <option value={i + 1}>{item}</option>;
  });

  return (
    <div className="container">
      {props.prefix && <div className="prefix">{props.prefix}</div>}
      <select
        className={classNames(
          "select",
          { "select--w-prefix": !!props.prefix },
          { "select--w-postfix": !!props.postfix }
        )}
      >
        {options}
      </select>
      {props.postfix && <div className="postfix">postfix</div>}
    </div>
  );
};

export default Select;
