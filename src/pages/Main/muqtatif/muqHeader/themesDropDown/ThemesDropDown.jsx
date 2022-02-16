import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import classes from "./ThemesDropDown.module.scss";
import theme_01 from "../../../../../images/themes/theme_01.png";
import { useAtom } from "jotai";
import { selectedThemeAtom, themeIsSelectedAtom } from "./ThemesAtoms";
import { THEMES, THEMES_NAMES } from "../../../../../constants";
import { convertHashToObject } from "../../../../../utils";
import useAtomsGroup from "../../../../../hooks/useAtomsGroup";
import { useMemo } from "react";

const ThemesDropDown = (props) => {
  const [, setSelectedTheme] = useAtom(selectedThemeAtom);
  const { setAtoms: setTheme } = useAtomsGroup();

  const applyTheme = (themeId) => {
    const themeName = themeId.split("-")[1];
    const themeHash = THEMES[themeName];
    const hashesObj = convertHashToObject(themeHash);

    setTheme(hashesObj);
  };

  const themesHandler = (e) => {
    setSelectedTheme(e.target.id);
    applyTheme(e.target.id);
  };

  /**
   *
   */
  const radioBtnLabels = useMemo(
    () => [
      {
        id: THEMES_NAMES.BROWN,
        value: "theme-01",
        option: <img src={theme_01} alt="theme" className={classes.themeImg} />,
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
      />
    </div>
  );
};

export default ThemesDropDown;
