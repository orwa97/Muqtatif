import RadioButtonsGroup from "../../../../../components/radioButtonsGroup/RadioButtonsGroup";
import classes from "./ThemesDropDown.module.scss";
import theme_01 from "../../../../../images/themes/theme_01.png";
import { useAtom } from "jotai";
import { SelectedThemeAtom } from "./ThemesAtoms";
import { useMemo, useState } from "react";
import { useUpdateAtom } from "jotai/utils";
import { textBgAtom } from "../settings/window/WindowAtoms";
import {
  fontColorAtom,
  fontSizeAtom,
  textAlignAtom,
} from "../settings/editor/EditorAtoms";
import { useEffect } from "react";
import { useCallback } from "react";
const ThemesDropDown = (props) => {
  const setTextBgIsChecked = useUpdateAtom(textBgAtom);
  const setFontColor = useUpdateAtom(fontColorAtom);
  const setTextAlign = useUpdateAtom(textAlignAtom);
  const setFontSize = useUpdateAtom(fontSizeAtom);
  const [themeIsSelected, setThemeIsSelected] = useState(false);
  const [selectedTheme, setSelectedTheme] = useAtom(SelectedThemeAtom);
  const themesHandler = useCallback((e) => {
    setSelectedTheme(e.target.id);
  }, []);
  const themesAltHandler = useCallback((e) => {
    setThemeIsSelected(true);
  }, []);
  // update Window's & Editor's states based on the selected theme
  useEffect(() => {
    const themeNum = !!selectedTheme ? selectedTheme.split("-")[2] : null;
    if (themeIsSelected) {
      if (themeNum === "01") {
        setTextBgIsChecked(false);
        setFontColor("#c3845b");
        setTextAlign("center");
        setFontSize("2.5");
      }
    }
  }, [selectedTheme, themeIsSelected]);

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
        onClick={themesAltHandler}
      />
    </div>
  );
};

export default ThemesDropDown;
