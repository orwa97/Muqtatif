import { SketchPicker } from "react-color";
import { useState } from "react";

const ColorPicker = (props) => {
  const [color, setColor] = useState("#fff");
  const colorChangeHandler = (color) => {
    setColor(color.hex);
    props.onColorChange(color.hex);
    // console.log(color);
  };
  return (
    <SketchPicker
      color={props.color}
      onChange={colorChangeHandler}
      disableAlpha={true}
    />
  );
};

export default ColorPicker;
