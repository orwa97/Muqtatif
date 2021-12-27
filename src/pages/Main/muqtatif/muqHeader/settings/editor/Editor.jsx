import classes from "./Editor.module.scss";
import { ReactComponent as ArrowDown } from "../../../../../../images/SVG/arrow_down.svg";
import { ReactComponent as AlignLeft } from "../../../../../../images/SVG/align-left.svg";
import { ReactComponent as AlignJustify } from "../../../../../../images/SVG/align-justify.svg";
import { ReactComponent as AlignCenter } from "../../../../../../images/SVG/align-center.svg";
import { ReactComponent as AlignRight } from "../../../../../../images/SVG/align-right.svg";
import Slider from "../../../../../../components/slider/Slider";
import { useContext, useState } from "react";
import SettingsContext from "../../../../../../context/settings-context";
import ColorButton from "../colorButton/ColorButton";
import { CompactPicker } from "react-color";
import FontsDropdown from "./fontsDropdown/FontsDropdown";
import RadioButtonsGroup from "../../../../../../components/radioButtonsGroup/RadioButtonsGroup";
const Editor = (props) => {
  // const settingsCtx = useContext(SettingsContext);
  const [fontBtnIsChecked, setFontBtnIsChecked] = useState(false);
  const fontBtnHandler = (e) => {
    setFontBtnIsChecked(e.target.checked);
  };

  const [selectedFontFamily, setSelectedFontFamily] = useState("btn-Al-Qalam");
  const [fontFamily, setFontFamily] = useState("Al-Qalam");
  const fontFamilyHandler = (e) => {
    setSelectedFontFamily(e.target.id);
    setFontFamily(e.target.value);
  };

  const [textFontSize, setTextFontSize] = useState("2");
  const textFontSizeHandler = (e) => {
    setTextFontSize(e.target.value);
  };

  const [textColor, setTextColor] = useState("#393939");
  const textColorHandler = (e) => {
    setTextColor(e.hex);
  };

  const [textAlign, setTextAlign] = useState("right");
  const [selectedTextAlign, setSelectedTextAlign] = useState("AR");
  const textAlignHandler = (e) => {
    setTextAlign(e.target.value);
    setSelectedTextAlign(e.target.id);
  };
  return (
    <div className={classes.container}>
      <div className={`${classes.quoteFont} ${classes.section}`}>
        <div className={classes.fontsBtn}>
          <input
            type="checkbox"
            id="fontsBtn"
            name="fonts"
            value="fonts"
            onChange={fontBtnHandler}
          />
          <label for="fontsBtn" className={classes.label}>
            <h2>
              {`Fonts: `}
              {<span>{fontFamily}</span>}
            </h2>
            <ArrowDown className={classes.icon} />
          </label>
        </div>
        {fontBtnIsChecked && (
          <div className={classes.fontFamilies}>
            <FontsDropdown
              className={classes.fontRadioBtn}
              onChange={fontFamilyHandler}
              isSelected={selectedFontFamily}
            />
          </div>
        )}
      </div>

      <div className={`${classes.fontSize} ${classes.section}`}>
        <h2>
          {`Font-size: `}
          {<span>{`${textFontSize * 10}px`}</span>}
        </h2>
        <Slider
          className={`${classes.fontSizeSlider} ${classes.slider}`}
          onChange={textFontSizeHandler}
          min="1.4"
          max="5"
          step="0.05"
          value={textFontSize}
        />
      </div>
      <div className={`${classes.textAlign} ${classes.section}`}>
        <h2>
          {`Text-align: `}
          {<span>{textAlign}</span>}
        </h2>
        <RadioButtonsGroup
          className={classes.textAlignRadioBtns}
          label={[
            {
              id: "AL",
              value: "left",
              option: <AlignLeft className={classes.alignIcon} />,
            },
            {
              id: "AJ",
              value: "justify",
              option: <AlignJustify className={classes.alignIcon} />,
            },
            {
              id: "AC",
              value: "center",
              option: <AlignCenter className={classes.alignIcon} />,
            },
            {
              id: "AR",
              value: "right",
              option: <AlignRight className={classes.alignIcon} />,
            },
          ]}
          name="text-alingment"
          flexDirection="row"
          onChange={textAlignHandler}
          isSelected={selectedTextAlign}
        />
      </div>

      <div className={`${classes.fontColor} ${classes.section}`}>
        <ColorButton
          className={classes.btn}
          selectedColor={textColor}
          colorPicker={
            <CompactPicker onChange={textColorHandler} color={textColor} />
          }
        />
      </div>
    </div>
  );
};

export default Editor;
