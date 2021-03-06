import classes from "./Editor.module.scss";
import { ReactComponent as ArrowDown } from "../../../../../../images/SVG/arrow_down.svg";
import { ReactComponent as AlignLeft } from "../../../../../../images/SVG/align-left.svg";
import { ReactComponent as AlignJustify } from "../../../../../../images/SVG/align-justify.svg";
import { ReactComponent as AlignCenter } from "../../../../../../images/SVG/align-center.svg";
import { ReactComponent as AlignRight } from "../../../../../../images/SVG/align-right.svg";
import Slider from "../../../../../../components/slider/Slider";
import { useState } from "react";
import ColorButton from "../colorButton/ColorButton";
import { CompactPicker } from "react-color";
import FontsDropdown from "./fontsDropdown/FontsDropdown";
import RadioButtonsGroup from "../../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import {
  fontColorAtom,
  fontFamilyAtom,
  fontSizeAtom,
  textAlignAtom,
  lineHeightAtom,
} from "./EditorAtoms";
import { useAtom } from "jotai";
const Editor = (props) => {
  const [fontBtnIsChecked, setFontBtnIsChecked] = useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState("btn-Al-Qalam");
  const [fontFamily, setFontFamily] = useAtom(fontFamilyAtom);
  const [textFontSize, setTextFontSize] = useAtom(fontSizeAtom);
  const [lineHeight, setLineHeight] = useAtom(lineHeightAtom);
  const [textColor, setTextColor] = useAtom(fontColorAtom);
  const [textAlign, setTextAlign] = useAtom(textAlignAtom);
  const [selectedTextAlign, setSelectedTextAlign] = useState("AR");

  const fontBtnHandler = (e) => {
    setFontBtnIsChecked(e.target.checked);
  };
  const fontFamilyHandler = (e) => {
    setSelectedFontFamily(e.target.id);
    setFontFamily(e.target.value);
  };
  const textFontSizeHandler = (e) => {
    setTextFontSize(e.target.value);
  };
  const lineHeightHandler = (e) => {
    setLineHeight(e.target.value);
  };
  const textColorHandler = (e) => {
    setTextColor(e.hex);
  };
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
          <label htmlFor="fontsBtn" className={classes.label}>
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
          min={1.4}
          max={5}
          step={0.05}
          value={textFontSize}
        />
      </div>
      <div className={`${classes.LineHeight} ${classes.section}`}>
        <h2>
          {`line-height: `}
          {<span>{lineHeight}</span>}
        </h2>
        <Slider
          className={`${classes.LineHeightSlider} ${classes.slider}`}
          onChange={lineHeightHandler}
          min={1}
          max={3}
          step={0.05}
          value={lineHeight}
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
