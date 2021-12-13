import classes from "./FontsDropdown.module.scss";
import "../../../../../../fonts/fonts.css";
import RadioButtonsGroup from "../../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import { Fragment } from "react";
const FontsDropdown = (props) => {
  const fonts = [
    "Al-Qalam",
    "Almarai",
    "Amiri",
    "Amiri-Bold",
    "Droid-Naskh",
    "Droid-sans",
    "El-Messiri",
    "Jomhuria",
    "Othmani",
    "Katibeh",
    "Hafs-Uthmanic",
    "Lateef",
    "Me-QuranR3HOQ",
    "Mirza",
    "Noto-Kufi",
    "Noto-Kufi-Bold",
    "Noto-Naskh",
    "Noto-Naskh-bold",
  ];
  const labels = fonts.map((item) => {
    return {
      id: item,
      value: item,
      option: (
        <Fragment>
          <span>{item}</span>
          <span style={{ fontFamily: item }}>القُرآنُ الكَرِيمُ</span>
        </Fragment>
      ),
    };
  });
  return (
    <RadioButtonsGroup
      className={props.className}
      label={labels}
      name="fontsRadio"
      flexDirection="column"
      onChange={props.onChange}
      isSelected={props.isSelected}
    />
  );
};

export default FontsDropdown;
