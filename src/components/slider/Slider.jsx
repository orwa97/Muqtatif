import classes from "./Slider.module.scss";
import classNames from "classnames";
const Slider = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <input
        className={classNames("slider")}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.onChange}
        // defaultValue={props.defaultValue}
        value={props.value}
      ></input>
    </div>
  );
};

export default Slider;
