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
  const settingsCtx = useContext(SettingsContext);
  const [fontBtnIsChecked, setFontBtnIsChecked] = useState(false);
  const fontBtnHandler = (e) => {
    setFontBtnIsChecked(e.target.checked);
  };
  const [selectedFontFamily, setSelectedFontFamily] = useState("btn-Al-Qalam");
  const fontFamilyHandler = (e) => {
    setSelectedFontFamily(e.target.id);
    settingsCtx.onChangeFontFamily(e.target.value);
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
              {<span>{settingsCtx.fontFamilyValue}</span>}
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
          {<span>{`${settingsCtx.fontSizeValue * 10}px`}</span>}
        </h2>
        <Slider
          className={`${classes.fontSizeSlider} ${classes.slider}`}
          onChange={settingsCtx.onChangeFontSize}
          min="1.4"
          max="5"
          step="0.05"
          value={settingsCtx.fontSizeValue}
        />
      </div>
      <div className={`${classes.textAlign} ${classes.section}`}>
        <h2>
          {`Text-align: `}
          {<span>{`${settingsCtx.fontSizeValue * 10}px`}</span>}
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
          onChange
          isSelected
        />
      </div>

      <div className={`${classes.fontColor} ${classes.section}`}>
        <ColorButton
          className={classes.btn}
          selectedColor={settingsCtx.textColorValue}
          colorPicker={
            <CompactPicker
              onChange={settingsCtx.onChangeTextColor}
              color={settingsCtx.textColorValue}
            />
          }
        />
      </div>
    </div>
  );
};

export default Editor;
