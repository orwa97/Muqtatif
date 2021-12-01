import { useState } from "react";
import RadioButtonsGroup from "../../../../components/radioButtonsGroup/RadioButtonsGroup";
import SettingsContext from "../../../../context/settings-context";
import classes from "./Settings.module.scss";
import Window from "./window/Window";

const Settings = (props) => {
  const [isSelected, setIsSelected] = useState("btn-window");
  const selectedRadioHandler = (e) => {
    setIsSelected(e.target.id);
    // console.log(e);
  };
  return (
    <SettingsContext.Provider
      value={{
        onChangePresetSize: props.onChangePresetSize,
        onChangeTextBgWidth: props.onChangeTextBgWidth,
        onChangeTextBgHeight: props.onChangeTextBgHeight,
        widthValue: props.widthValue,
        heightValue: props.heightValue,
        onChangeTextBgColor: props.onChangeTextBgColor,
        textBgColor: props.textBgColor,
        onChangeTextBgOpacity: props.onChangeTextBgOpacity,
        opacityValue: props.opacityValue,
      }}
    >
      <div className={classes.settingsContainer}>
        <div className={classes.btnsSide}>
          <RadioButtonsGroup
            className={classes.radioBtns}
            label={[
              { id: "window", option: "Window", value: "Window" },
              { id: "edit", option: "Edit", value: "Edit" },
            ]}
            name="SettingsRadio"
            flexDirection="column"
            onChange={selectedRadioHandler}
            isSelected={isSelected}
          />
        </div>
        <div className={classes.featuresSide}>
          {isSelected === "btn-window" && <Window />}
        </div>
      </div>
    </SettingsContext.Provider>
  );
};

export default Settings;
