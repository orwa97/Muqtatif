import Button from "../../../../../components/button/Button";
import classes from "./Editor.module.scss";
import { ReactComponent as ArrowDown } from "../../../../../images/SVG/arrow_down.svg";
import Slider from "../../../../../components/slider/Slider";
import { useContext, useState } from "react";
import SettingsContext from "../../../../../context/settings-context";
const Editor = (props) => {
  const settingCtx = useContext(SettingsContext);
  // const [fontSize, setFontSize] = useState("2");
  // const fontSizeHandler = (e) => {
  //   setFontSize(e.target.value);
  //   console.log(e.target.value);
  // };
  return (
    <div className={classes.container}>
      <div className={`${classes.quoteFont} ${classes.section}`}>
        <Button
          className={classes.fontBtn}
          type="icon-text"
          icon={<ArrowDown />}
        >
          <h2>Font</h2>
        </Button>
      </div>
      <div className={`${classes.fontSize} ${classes.section}`}>
        <h2>Size</h2>
        <Slider
          className={classes.fontSizeSlider}
          onChange={settingCtx.onChangeFontSize}
          min="1.4"
          max="5"
          step="0.05"
          value={settingCtx.fontSizeValue}
        />
      </div>
      <div className={`${classes.fontColor} ${classes.section}`}>
        <Button
          className={classes.fontBtn}
          type="icon-text"
          icon={<ArrowDown />}
        >
          <h2>Color</h2>
        </Button>
      </div>
    </div>
  );
};

export default Editor;
