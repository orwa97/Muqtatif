import Button from "../../../../../components/button/Button";
import classes from "./ColorButton.module.scss";
import Tippy from "@tippyjs/react";
import { ReactComponent as ArrowDown } from "../../../../../images/SVG/arrow_down.svg";
let textColor;
const ColorButton = (props) => {
  typeof props.selectedColor === "object"
    ? (textColor = `rgba(${props.selectedColor.r}, ${props.selectedColor.g}, ${props.selectedColor.b})`)
    : (textColor = props.selectedColor);
  return (
    <Tippy
      content={props.colorPicker}
      placement="bottom"
      trigger="click"
      interactive="true"
      delay={0}
      duration={100}
    >
      <Button
        type="icon-text"
        className={`${classes.colorPickerBtn} ${props.className}`}
        icon={<ArrowDown style={{ fill: props.selectedColor }} />}
        selectedColor={props.selectedColor}
        isDisabled={props.isDisabled}
      >
        <h2 style={{ color: textColor }}>Color</h2>
      </Button>
    </Tippy>
  );
};

export default ColorButton;
