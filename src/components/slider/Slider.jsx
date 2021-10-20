import "./Slider.scss";
import classNames from "classnames";
const Slider = (props) => {
  return (
    <input
      classNames={classNames("slider")}
      type="range"
      min="0"
      max="100"
      step="1"
    ></input>
  );
};

export default Slider;
