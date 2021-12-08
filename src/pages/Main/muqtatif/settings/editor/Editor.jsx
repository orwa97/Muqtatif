import Button from "../../../../../components/button/Button";
import classes from "./Editor.module.scss";
import { ReactComponent as ArrowDown } from "../../../../../images/SVG/arrow_down.svg";
import Slider from "../../../../../components/slider/Slider";
import { useContext, useState } from "react";
import SettingsContext from "../../../../../context/settings-context";
import ColorButton from "../colorButton/ColorButton";
import { CompactPicker } from "react-color";
import FontsDropdown from "./fontsDropdown/FontsDropdown";
const Editor = (props) => {
  const settingCtx = useContext(SettingsContext);
  const [fontBtnIsClicked, setFontBtnIsClicked] = useState(false);
  const fontBtnHandler = (e) => {
    setFontBtnIsClicked(true);
  };
  return (
    <div className={classes.container}>
      <div className={`${classes.quoteFont} ${classes.section}`}>
        <Button
          className={classes.fontBtn}
          type="icon-text"
          icon={<ArrowDown />}
          onClick={fontBtnHandler}
        >
          <h2>Font</h2>
        </Button>
      </div>
      {fontBtnIsClicked && (
        <div className={classes.fontFamilies}>
          <FontsDropdown />
        </div>
      )}
      <div className={`${classes.fontSize} ${classes.section}`}>
        <h2>Font-size</h2>
        <Slider
          className={`${classes.fontSizeSlider} ${classes.slider}`}
          onChange={settingCtx.onChangeFontSize}
          min="1.4"
          max="5"
          step="0.05"
          value={settingCtx.fontSizeValue}
        />
      </div>
      <div className={`${classes.fontWeight} ${classes.section}`}>
        <h2>Font-weight</h2>
        <Slider
          className={`${classes.fontWeightSlider} ${classes.slider}`}
          onChange={settingCtx.onChangeFontWeight}
          min="100"
          max="900"
          step="100"
          value={settingCtx.fontWeightValue}
        />
      </div>
      <div className={`${classes.fontColor} ${classes.section}`}>
        <ColorButton
          className={classes.fontBtn}
          colorPicker={
            <CompactPicker onChange={settingCtx.onChangeTextColor} />
          }
        />
        {/* <Button
          className={classes.fontBtn}
          type="icon-text"
          icon={<ArrowDown />}
        >
          <h2>Color</h2>
        </Button> */}
      </div>
    </div>
  );
};

export default Editor;
