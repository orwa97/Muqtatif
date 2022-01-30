import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import classes from "./ThemesDropDown.module.scss";
import theme_01 from "../../../../../images/themes/theme_01.png";
import { useAtom } from "jotai";
import { SelectedThemeAtom } from "./ThemesAtoms";
import { useMemo } from "react";
const ThemesDropDown = (props) => {
  const [selectedTheme, setSelectedTheme] = useAtom(SelectedThemeAtom);
  const themesHandler = (e) => {
    setSelectedTheme(e.target.id);
  };

  const radioBtnLabels = useMemo(
    () => [
      {
        id: "theme-01",
        value: "theme-01",
        option: <img src={theme_01} className={classes.themeImg} />,
      },
      {
        id: "theme-02",
        value: "theme-02",
        option: <img src className={classes.themeImg} />,
      },
    ],
    []
  );
  return (
    <div className={classes.container}>
      <RadioButtonsGroup
        className={classes.radioBtns}
        label={radioBtnLabels}
        name="ThemesRadio"
        flexDirection="row"
        onChange={themesHandler}
        isSelected={selectedTheme}
      />
    </div>
  );
};

export default ThemesDropDown;
