import classNames from "classnames";
import "./RadioButtonsGroup.scss";
const RadioButtonsGroup = (props) => {
  const labels = props.label.map((item, i) => {
    return (
      <div className={`radioBtn`} key={item.id}>
        <input
          type="radio"
          id={`btn-${item.id}`}
          value={item.value}
          name={props.name}
          onChange={props.onChange}
          checked={props.isSelected === `btn-${item.id}`}
        ></input>

        <label
          className="radio-label"
          htmlFor={`btn-${item.id}`}
          onClick={props.onClick}
        >
          {item.option}
          {!!props.icon && <div className="radioIcon">{props.icon}</div>}
        </label>
      </div>
    );
  });
  return (
    <div
      className={classNames(
        "radioBtnBox",
        { vertically: props.flexDirection === "column" },
        { horizontally: props.flexDirection === "row" },
        props.className
      )}
    >
      {labels}
    </div>
  );
};

export default RadioButtonsGroup;
