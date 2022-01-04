import classes from "./Window.module.scss";
import Slider from "../../../../../../components/slider/Slider";
import { useState } from "react";
import RadioButtonsGroup from "../../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import { SwatchesPicker } from "react-color";
import Checkboxx from "../../../../../../components/checkboxx/Checkboxx";
import ColorButton from "../colorButton/ColorButton";
import { useAtom } from "jotai";
import queryString from "query-string";
import {
  aspectRatioAtom,
  textBgHeightAtom,
  textBgWidthAtom,
  textBgOpacityAtom,
  dropShadowAtom,
  textBgColorAtom,
  dropShadowOffsetYAtom,
  dropShadowBlurAtom,
  textBgAtom,
} from "./WindowAtoms";
import { useLocation } from "react-router-dom";

const Window = (props) => {
  const location = useLocation();
  const params = queryString.parse(location.hash);
  const settingsValues = Object.fromEntries(
    Object.entries(params).map(([k, v], i) => [k, v.replace(/['"]+/g, "")])
  );

  const [isSelected, setIsSelected] = useState("btn-b");
  const [presetSize, setPresetSize] = useAtom(aspectRatioAtom);
  const presetSizeHandler = (e) => {
    setIsSelected(e.target.id);
    setPresetSize(e.target.value);
  };

  const [textBgWidth, setTextBgWidth] = useAtom(textBgWidthAtom);
  const textBgWidthHandler = (e) => {
    setTextBgWidth(e.target.value);
  };

  const [textBgHeight, setTextBgHeight] = useAtom(textBgHeightAtom);
  const textBgHeightHandler = (e) => {
    setTextBgHeight(e.target.value);
  };

  const [textBgOpacity, setTextBgOpacity] = useAtom(textBgOpacityAtom);
  const textBgOpacityHandler = (e) => {
    setTextBgOpacity(e.target.value);
  };

  const [textBgColor, setTextBgColor] = useAtom(textBgColorAtom);
  const textBgColorHandler = (e) => {
    setTextBgColor(e.hex);
  };

  const [dropShadowIsChecked, setDropShadowIsChecked] = useAtom(dropShadowAtom);
  const dropShadowChBxHandler = (e) => {
    setDropShadowIsChecked(e.target.checked);
  };

  const [dropShadowOffset, setDropShadowOffset] = useAtom(
    dropShadowOffsetYAtom
  );
  const DropShadowOffsetHandler = (e) => {
    setDropShadowOffset(e.target.value);
  };

  const [dropShadowBlur, setdropShadowBlur] = useAtom(dropShadowBlurAtom);
  const dropShadowBlurHandler = (e) => {
    setdropShadowBlur(e.target.value);
  };

  const [textBgIsChecked, setTextBgIsChecked] = useAtom(textBgAtom);
  const textBgChBxHandler = (e) => {
    setTextBgIsChecked(e.target.checked);
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.presetImgSize} ${classes.section}`}>
        <h1>Preset size</h1>
        <RadioButtonsGroup
          className={classes.radioBtns}
          label={[
            { id: "a", value: "1:1", option: "Squar" },
            { id: "b", value: "16:9", option: "Facebook Cover" },
            { id: "c", value: "9:16", option: "Snapchat" },
            { id: "d", value: "9:16", option: "Instagram story" },
            { id: "e", value: "2:1", option: "Twitter" },
          ]}
          name="windowRadio"
          flexDirection="row"
          onChange={presetSizeHandler}
          isSelected={isSelected}
        />
      </div>
      <div className={classes.textBackground}>
        <Checkboxx
          className={classes.textBgCheckbox}
          label={<h1>Text background</h1>}
          id="textBg"
          size="small"
          color="white"
          shape="circle"
          isChecked={textBgIsChecked}
          onChange={textBgChBxHandler}
          onChBxClick={setTextBgIsChecked}
        />
        <div
          className={classes.textBgSettings}
          style={
            !textBgIsChecked
              ? { backgroundColor: "rgba(206, 206, 206, 0.65)" }
              : { backgroundColor: "transparent" }
          }
        >
          <div className={`${classes.textBackgroundSize} ${classes.section}`}>
            <div
              className={`${classes.sliderContainer}
                ${!textBgIsChecked ? classes.sliderDisabled : ""}`}
            >
              <h2>
                {`Width: `}
                {<span>{`${textBgWidth}%`}</span>}
              </h2>
              <Slider
                className={classes.sizeSlider}
                onChange={textBgWidthHandler}
                min="25"
                max="85"
                step="1"
                value={textBgWidth}
                isDisabled={!textBgIsChecked}
              />
            </div>
            <div
              className={`${classes.sliderContainer}
                ${!textBgIsChecked ? classes.sliderDisabled : ""}`}
            >
              <h2>
                {`Height: `}
                {<span>{`${textBgHeight}%`}</span>}
              </h2>
              <Slider
                className={classes.sizeSlider}
                onChange={textBgHeightHandler}
                min="25"
                max="85"
                step="1"
                value={textBgHeight}
                isDisabled={!textBgIsChecked}
              />
            </div>
          </div>
          <div
            className={`${classes.textBackgroundColor} ${classes.section} ${
              !textBgIsChecked ? classes.colorBtnDisabled : ""
            }`}
          >
            <ColorButton
              className={classes.colorBtn}
              selectedColor={textBgColor}
              colorPicker={
                <SwatchesPicker
                  width="245px"
                  height="150px"
                  onChange={textBgColorHandler}
                  color={textBgColor}
                />
              }
              isDisabled={!textBgIsChecked}
            />
          </div>
          <div
            className={`${classes.opacityContainer} ${
              !textBgIsChecked ? classes.opacityDisabled : ""
            }`}
          >
            <h2>
              {`Opacity: `}
              {<span>{`${Math.floor(textBgOpacity * 100)}%`}</span>}
            </h2>
            <Slider
              className={classes.opacitySlider}
              onChange={textBgOpacityHandler}
              min="0"
              max="1"
              step="0.01"
              value={textBgOpacity}
              isDisabled={!textBgIsChecked}
            />
          </div>
          <div className={classes.dropShadowCointainer}>
            <Checkboxx
              className={`${classes.dropShadowCheckbox} ${
                !textBgIsChecked ? classes.dropShDisabled : ""
              }`}
              label={<h2>Drop shadow</h2>}
              id="dropShadow"
              size="small"
              color="white"
              shape="circle"
              borderBottom={dropShadowIsChecked && "1px solid #fff"}
              isChecked={dropShadowIsChecked}
              onChange={dropShadowChBxHandler}
              onChBxClick={setDropShadowIsChecked}
              isDisabled={!textBgIsChecked}
            />
            {dropShadowIsChecked && (
              <div
                className={`${classes.dropShadowSettings} ${classes.section}`}
              >
                <div className={classes.sliderContainer}>
                  <h2>
                    {`Offset-Y: `}
                    {<span>{`${dropShadowOffset}px`}</span>}
                  </h2>
                  <Slider
                    className={classes.dropShadowSlider}
                    onChange={DropShadowOffsetHandler}
                    min="-20"
                    max="20"
                    step="1"
                    value={dropShadowOffset}
                  />
                </div>
                <div className={classes.sliderContainer}>
                  <h2>
                    {`Blur-radius: `}
                    {<span>{`${dropShadowBlur}px`}</span>}
                  </h2>
                  <Slider
                    className={classes.dropShadowSlider}
                    onChange={dropShadowBlurHandler}
                    min="0"
                    max="20"
                    step="1"
                    value={dropShadowBlur}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
