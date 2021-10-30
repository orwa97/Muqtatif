import { SketchPicker } from "react-color";
import { useState } from "react";

const ColorPicker = (props) => {
  const [color, setColor] = useState("#fff");
  const colorChangeHandler = (color) => {
    setColor(color.hex);
    console.log(color);
  };
  return <SketchPicker color={color} onChange={colorChangeHandler} />;
};

export default ColorPicker;
