import classes from "./FontsDropdown.module.scss";
import "../../../../../../fonts/fonts.css";
import RadioButtonsGroup from "../../../../../../components/radioButtonsGroup/RadioButtonsGroup";
const FontsDropdown = (props) => {
  return (
    <RadioButtonsGroup
      className={classes.fontsRadioBtns}
      label={[
        {
          id: "font-a",
          value: "Al-Qalam",
          option: `Al-Qalam ${(
            <h2 style={{ fontFamily: "Al-Qalam", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-b",
          value: "Almarai",
          option: `Almarai ${(
            <h2 style={{ fontFamily: "Al-Qalam", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-c",
          value: "Almarai-bold",
          option: `Almarai-Bold ${(
            <h2 style={{ fontFamily: "Almarai-Bold", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-d",
          value: "Almarai-Light",
          option: `Almarai-Light ${(
            <h2 style={{ fontFamily: "Almarai-Light", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-e",
          value: "Almushaf",
          option: `Almushaf ${(
            <h2 style={{ fontFamily: "Almushaf", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-f",
          value: "Amiri",
          option: `Amiri ${(
            <h2 style={{ fontFamily: "Amiri", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-g",
          value: "Amiri-Bold",
          option: `Amiri-Bold ${(
            <h2 style={{ fontFamily: "Amiri-Bold", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-h",
          value: "Othmani",
          option: `Othmani ${(
            <h2 style={{ fontFamily: "Othmani", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-i",
          value: "Droid-Kufi",
          option: `Droid-Kufi ${(
            <h2 style={{ fontFamily: "Droid-Kufi", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-j",
          value: "Droid-Naskh",
          option: `Droid-Naskh ${(
            <h2 style={{ fontFamily: "Droid-Naskh", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-k",
          value: "Hafs-Uthmanic",
          option: `Hafs-Uthmanic ${(
            <h2 style={{ fontFamily: "Hafs-Uthmanic", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-l",
          value: "Lateef",
          option: `Lateef ${(
            <h2 style={{ fontFamily: "Lateef", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-m",
          value: "Mada",
          option: `Mada ${(
            <h2 style={{ fontFamily: "Mada", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-n",
          value: "Mada-Bold",
          option: `Mada-Bold ${(
            <h2 style={{ fontFamily: "Mada-Bold", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
        {
          id: "font-o",
          value: "Mada-Light",
          option: `Mada-Light ${(
            <h2 style={{ fontFamily: "Mada-Light", fontSize: "1.2rem" }}>
              القرآن الكريم
            </h2>
          )}`,
        },
      ]}
      name="fontsRadio"
      flexDirection="column"
      onChange
      isSelected
    />
  );
};

export default FontsDropdown;
