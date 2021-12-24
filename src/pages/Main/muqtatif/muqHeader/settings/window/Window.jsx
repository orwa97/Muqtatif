import classes from "./Window.module.scss";
import Slider from "../../../../../../components/slider/Slider";
import RadioButtonsGroup from "../../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import { SwatchesPicker } from "react-color";
import { useContext, useState } from "react";
import SettingsContext from "../../../../../../context/settings-context";
import Checkboxx from "../../../../../../components/checkboxx/Checkboxx";
import ColorButton from "../colorButton/ColorButton";

const Window = (props) => {
  const settingsCtx = useContext(SettingsContext);

  const [dropShadowIsChecked, setDropShadowIsChecked] = useState(false);
  const dropShadowChBxHandler = (e) => {
    setDropShadowIsChecked(e.target.checked);
    settingsCtx.onChangeDropShadow(!e.target.checked);
  };
  const [textBgIsChecked, setTextBgIsChecked] = useState(true);
  const textBgChBxHandler = (e) => {
    setTextBgIsChecked(e.target.checked);
    settingsCtx.textBgIsDisabled(!e.target.checked);
  };
  const [isSelected, setIsSelected] = useState("btn-b");
  const selectedRadioHandler = (e) => {
    setIsSelected(e.target.id);
    settingsCtx.onChangePresetSize(e);
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
          onChange={selectedRadioHandler}
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
                {<span>{`${settingsCtx.widthValue}%`}</span>}
              </h2>
              <Slider
                className={classes.sizeSlider}
                onChange={settingsCtx.onChangeTextBgWidth}
                min="25"
                max="85"
                step="1"
                value={settingsCtx.widthValue}
                isDisabled={!textBgIsChecked}
              />
            </div>
            <div
              className={`${classes.sliderContainer}
                ${!textBgIsChecked ? classes.sliderDisabled : ""}`}
            >
              <h2>
                {`Height: `}
                {<span>{`${settingsCtx.heightValue}%`}</span>}
              </h2>
              <Slider
                className={classes.sizeSlider}
                onChange={settingsCtx.onChangeTextBgHeight}
                min="25"
                max="85"
                step="1"
                value={settingsCtx.heightValue}
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
              selectedColor={settingsCtx.textBgColor}
              colorPicker={
                <SwatchesPicker
                  width="245px"
                  height="150px"
                  onChange={settingsCtx.onChangeTextBgColor}
                  color={settingsCtx.textBgColor}
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
              {<span>{`${Math.floor(settingsCtx.opacityValue * 100)}%`}</span>}
            </h2>
            <Slider
              className={classes.opacitySlider}
              onChange={settingsCtx.onChangeTextBgOpacity}
              min="0"
              max="1"
              step="0.01"
              value={settingsCtx.opacityValue}
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
                    {<span>{`${settingsCtx.offsetYValue}px`}</span>}
                  </h2>
                  <Slider
                    className={classes.dropShadowSlider}
                    onChange={settingsCtx.onChangeOffsetY}
                    min="-20"
                    max="20"
                    step="1"
                    value={settingsCtx.offsetYValue}
                  />
                </div>
                <div className={classes.sliderContainer}>
                  <h2>
                    {`Blur-radius: `}
                    {<span>{`${settingsCtx.blurValue}px`}</span>}
                  </h2>
                  <Slider
                    className={classes.dropShadowSlider}
                    onChange={settingsCtx.onChangeBlur}
                    min="0"
                    max="20"
                    step="1"
                    value={settingsCtx.blurValue}
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
