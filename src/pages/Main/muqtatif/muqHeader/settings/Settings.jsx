import { useState } from "react";
import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import SettingsContext from "../../../../../context/settings-context";
import { ReactComponent as ArrowRight } from "../../../../../images/SVG/arrow_right.svg";
import Editor from "./editor/Editor";
import classes from "./Settings.module.scss";
import Window from "./window/Window";

const Settings = (props) => {
  const [isSelected, setIsSelected] = useState("btn-window");
  const selectedRadioHandler = (e) => {
    setIsSelected(e.target.id);
  };
  return (
    <SettingsContext.Provider
      value={{
        onChangePresetSize: props.onChangePresetSize,
        textBgIsDisabled: props.onChangeTextBg,
        onChangeTextBgWidth: props.onChangeTextBgWidth,
        onChangeTextBgHeight: props.onChangeTextBgHeight,
        widthValue: props.widthValue,
        heightValue: props.heightValue,
        onChangeTextBgColor: props.onChangeTextBgColor,
        textBgColor: props.textBgColor,
        onChangeTextBgOpacity: props.onChangeTextBgOpacity,
        opacityValue: props.opacityValue,
        onChangeOffsetY: props.onChangeDropShadowOffset,
        offsetYValue: props.offsetYValue,
        onChangeBlur: props.onChangeDropShadowBlur,
        blurValue: props.blurValue,
        onChangeDropShadow: props.onChangeDropShadow,
        onChangeFontSize: props.onChangeFontSize,
        fontSizeValue: props.fontSizeValue,
        onChangeFontWeight: props.onChangeFontWeight,
        fontWeightValue: props.fontWeightValue,
        onChangeTextColor: props.onChangeTextColor,
        textColorValue: props.textColorValue,
        onChangeFontFamily: props.onChangeFontFamily,
        fontFamilyValue: props.fontFamilyValue,
        onChangeTextAlign: props.onChangeTextAlign,
        textAlignValue: props.textAlignValue,
      }}
    >
      <div className={classes.settingsContainer}>
        <div className={classes.btnsSide}>
          <RadioButtonsGroup
            className={classes.radioBtns}
            label={[
              { id: "window", option: "Window", value: "window" },
              { id: "editor", option: "Editor", value: "editor" },
            ]}
            name="SettingsRadio"
            flexDirection="column"
            onChange={selectedRadioHandler}
            isSelected={isSelected}
            icon={<ArrowRight />}
          />
        </div>
        <div className={classes.featuresSide}>
          {isSelected === "btn-window" && <Window />}
          {isSelected === "btn-editor" && <Editor />}
        </div>
      </div>
    </SettingsContext.Provider>
  );
};

export default Settings;
