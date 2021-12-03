import { useState } from "react";
import classNames from "classnames";
import "./RadioButtonsGroup.scss";
const RadioButtonsGroup = (props) => {
  // const [isSelected, setIsSelected] = useState(props.selectedByDefault);
  // const radioBtnHandler = (e) => {
  //   setIsSelected(e.target.id);
  //   // console.log(e);
  // };
  const labels = props.label.map((item, i) => {
    return (
      <div className={`radioBtn ${props.className}`}>
        <input
          type="radio"
          id={`btn-${item.id}`}
          value={item.value}
          name={props.name}
          onChange={props.onChange}
          checked={props.isSelected === `btn-${item.id}`}
        ></input>

        <label className="radio-label" for={`btn-${item.id}`}>
          {item.option}
          <div className="radioIcon">{props.icon}</div>
        </label>
      </div>
    );
  });
  return (
    <div
      className={classNames(
        "radioBtnBox",
        { vertically: props.flexDirection === "column" },
        { horizontally: props.flexDirection === "row" }
      )}
    >
      {labels}
    </div>
  );
};

export default RadioButtonsGroup;
