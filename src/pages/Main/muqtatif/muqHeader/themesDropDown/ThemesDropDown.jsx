import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import classes from "./ThemesDropDown.module.scss";
import theme_01 from "../../../../../images/themes/theme_01.png";
import { useAtom } from "jotai";
import { SelectedThemeAtom, themeAtom } from "./ThemesAtoms";
import { useMemo } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { THEMES, THEMES_NAMES } from "../../../../../constants";
import { convertHashToObject } from "../../../../../utils";
import useAtomGroups from "../../../../../hooks/useAtomsGroup";

const ThemesDropDown = (props) => {
  const [themeIsSelected, setThemeIsSelected] = useAtom(themeAtom);
  const [selectedTheme, setSelectedTheme] = useAtom(SelectedThemeAtom);
  const setTheme = useAtomGroups();
  const history = useHistory();
  const location = useLocation();

  const themesHandler = (e) => {
    setSelectedTheme(e.target.id);
  };

  const themesAltHandler = () => {
    // setThemeIsSelected(true);
  };

  /**
   * respond to theme selection
   * apply theme and respect current settings
   */
  useEffect(() => {
    if (!selectedTheme) {
      return;
    }
    const themeName = selectedTheme.split("-")[1];
    const themeHash = THEMES[themeName];
    const hashesObj = convertHashToObject(themeHash);

    setTheme(hashesObj);
  }, [selectedTheme]);

  /**
   *
   */
  const radioBtnLabels = useMemo(
    () => [
      {
        id: THEMES_NAMES.BROWN,
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
        onClick={themesAltHandler}
      />
    </div>
  );
};

export default ThemesDropDown;
