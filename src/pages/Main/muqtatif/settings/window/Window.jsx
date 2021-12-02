import classes from "./Window.module.scss";
import Slider from "../../../../../components/slider/Slider";
import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import { SwatchesPicker } from "react-color";
import { useContext, useState } from "react";
import Button from "../../../../../components/button/Button";
import { ReactComponent as ArrowDown } from "../../../../../images/SVG/arrow_down.svg";
import SettingsContext from "../../../../../context/settings-context";
import Checkboxx from "../../../../../components/checkboxx/Checkboxx";

const Window = (props) => {
  const settingsCtx = useContext(SettingsContext);
  const [dropShadowIsChecked, setDropShadowIsChecked] = useState(false);
  const dropShadowChBxHandler = (e) => {
    setDropShadowIsChecked(e.target.checked);
    // console.log(e);
  };
  const [textBgIsChecked, setTextBgIsChecked] = useState(true);
  const textBgChBxHandler = (e) => {
    setTextBgIsChecked(e.target.checked);
    // console.log(e);
  };
  const [isSelected, setIsSelected] = useState("btn-b");
  const selectedRadioHandler = (e) => {
    setIsSelected(e.target.id);
    // console.log(e);
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
          size="medium"
          color="white"
          shape="circle"
          isChecked={textBgIsChecked}
          onChange={textBgChBxHandler}
        />
        <div className={classes.textBgSettings}>
          <div className={`${classes.textBackgroundSize} ${classes.section}`}>
            <div className={classes.sliderContainer}>
              <h2>Width</h2>
              <Slider
                className={classes.sizeSlider}
                onChange={settingsCtx.onChangeTextBgWidth}
                min="25"
                max="85"
                step="1"
                value={settingsCtx.widthValue}
              />
            </div>
            <div className={classes.sliderContainer}>
              <h2>Height</h2>
              <Slider
                className={classes.sizeSlider}
                onChange={settingsCtx.onChangeTextBgHeight}
                min="25"
                max="85"
                step="1"
                value={settingsCtx.heightValue}
              />
            </div>
          </div>
          <div className={`${classes.textBackgroundColor} ${classes.section}`}>
            <Button
              type="icon-text"
              className={classes.colorBtn}
              icon={<ArrowDown style={{ fill: settingsCtx.textBgColor }} />}
              selectedColor={settingsCtx.textBgColor}
              tippyContent={
                <SwatchesPicker
                  width="245px"
                  height="150px"
                  onChange={settingsCtx.onChangeTextBgColor}
                />
              }
              tippyPlacement="bottom"
              tippyTrigger="click"
            >
              <h2>Color</h2>
            </Button>
          </div>
          <div className={classes.opacityContainer}>
            <h2>Opacity</h2>
            <Slider
              className={classes.opacitySlider}
              onChange={settingsCtx.onChangeTextBgOpacity}
              min="0"
              max="1"
              step="0.01"
              value={settingsCtx.opacityValue}
            />
          </div>
          <div className={classes.dropShadowCointainer}>
            <Checkboxx
              className={classes.dropShadowCheckbox}
              label={<h2>Drop shadow</h2>}
              id="dropShadow"
              size="small"
              color="white"
              shape="circle"
              isChecked={dropShadowIsChecked}
              onChange={dropShadowChBxHandler}
            />
            {dropShadowIsChecked && (
              <div
                className={`${classes.dropShadowSettings} ${classes.section}`}
              >
                <div className={classes.sliderContainer}>
                  <h2>Offset-Y</h2>
                  <Slider
                    className={classes.dropShadowSlider}
                    onChange
                    min="-10"
                    max="10"
                    step="1"
                    value
                  />
                </div>
                <div className={classes.sliderContainer}>
                  <h2>Blur-radius</h2>
                  <Slider
                    className={classes.dropShadowSlider}
                    onChange
                    min="0"
                    max="10"
                    step="1"
                    value
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
