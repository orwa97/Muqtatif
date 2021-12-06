import { Fragment } from "react";
import Button from "../../../../../components/button/Button";
import classes from "./ColorButton.module.scss";
import { ReactComponent as ArrowDown } from "../../../../../images/SVG/arrow_down.svg";

const ColorButton = (props) => {
  return (
    <Fragment>
      <Button
        type="icon-text"
        className={`${classes.colorPickerBtn} ${props.className}`}
        icon={<ArrowDown style={{ fill: props.selectedColor }} />}
        selectedColor={props.selectedColor}
        tippyContent={props.colorPicker}
        tippyPlacement="bottom"
        tippyTrigger="click"
        isDisabled={props.isDisabled}
      >
        <h2>Color</h2>
      </Button>
    </Fragment>
  );
};

export default ColorButton;
