import { useState } from "react";
import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
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
  );
};

export default Settings;
