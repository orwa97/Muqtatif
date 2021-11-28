import classes from "./Window.module.scss";
import Slider from "../../../../../components/slider/Slider";
import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import { CompactPicker } from "react-color";
import { useState } from "react";
const Window = (props) => {
  const [isSelected, setIsSelected] = useState("btn-a");
  const selectedRadioHandler = (e) => {
    setIsSelected(e.target.id);
    // console.log(e);
  };
  return (
    <div className={classes.container}>
      <div className={classes.presetImgSize}>
        <p>Preset sizes</p>
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
      <div className={classes.textBackgroundSize}>
        <p>Width</p>
        <Slider />
        <p>Hight</p>
        <Slider />
      </div>
      <div className={classes.textBackgroundColor}>
        <p>Color</p>
        <CompactPicker />
      </div>
    </div>
  );
};

export default Window;
