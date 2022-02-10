import classes from "./Slider.module.scss";
const Slider = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <input
        className={classes.slider}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.onChange}
        value={props.value}
        disabled={props.isDisabled}
      ></input>
    </div>
  );
};

export default Slider;
