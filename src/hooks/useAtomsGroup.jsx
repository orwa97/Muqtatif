import { RESET, useUpdateAtom } from "jotai/utils";
import { HASHES } from "../constants";
import {
  fontColorAtom,
  fontFamilyAtom,
  fontSizeAtom,
  lineHeightAtom,
  textAlignAtom,
} from "../pages/Main/muqtatif/muqHeader/settings/editor/EditorAtoms";
import {
  aspectRatioAtom,
  dropShadowAtom,
  dropShadowBlurAtom,
  dropShadowOffsetYAtom,
  textBgAtom,
  textBgColorAtom,
  textBgHeightAtom,
  textBgOpacityAtom,
  textBgWidthAtom,
} from "../pages/Main/muqtatif/muqHeader/settings/window/WindowAtoms";
import {
  selectedThemeAtom,
  themeIsSelectedAtom,
} from "../pages/Main/muqtatif/muqHeader/themesDropDown/ThemesAtoms";
import {
  muqBgColorAtom,
  selectedVerseAtom,
} from "../pages/Main/muqtatif/MuqtatifAtoms";

const useAtomsGroup = () => {
  // --------------------ATOMS UPDATE FUNCTIONS--------------------
  // MuqAtoms
  const setters = {
    [HASHES.SELECTED_VERSE]: useUpdateAtom(selectedVerseAtom),
    [HASHES.MUQ_BG_COLOR]: useUpdateAtom(muqBgColorAtom),
    // WindowAtoms
    [HASHES.ASPECT_RATIO]: useUpdateAtom(aspectRatioAtom),
    [HASHES.TEXT_BG_CHECKED]: useUpdateAtom(textBgAtom),
    [HASHES.TEXT_BG_WIDTH]: useUpdateAtom(textBgWidthAtom),
    [HASHES.TEXT_BG_HEIGHT]: useUpdateAtom(textBgHeightAtom),
    [HASHES.TEXT_BG_OPACITY]: useUpdateAtom(textBgOpacityAtom),
    [HASHES.TEXT_BG_COLOR]: useUpdateAtom(textBgColorAtom),
    [HASHES.DROPSHADOW_CHECKED]: useUpdateAtom(dropShadowAtom),
    [HASHES.DROPSHADOW_OFFSET]: useUpdateAtom(dropShadowOffsetYAtom),
    [HASHES.DROPSHADOW_BLUR]: useUpdateAtom(dropShadowBlurAtom),
    // EditorAtoms
    [HASHES.FONT_FAMILY]: useUpdateAtom(fontFamilyAtom),
    [HASHES.FONT_SIZE]: useUpdateAtom(fontSizeAtom),
    [HASHES.FONT_COLOR]: useUpdateAtom(fontColorAtom),
    [HASHES.TEXT_ALIGN]: useUpdateAtom(textAlignAtom),
    [HASHES.LINE_HEIGHT]: useUpdateAtom(lineHeightAtom),
    // ThemesAtoms
    [HASHES.SELECTED_THEME]: useUpdateAtom(selectedThemeAtom),
    [HASHES.THEME_IS_SELECTED]: useUpdateAtom(themeIsSelectedAtom),
  };

  const setAtoms = (stateObj) => {
    for (const key in stateObj) {
      setters[key](stateObj[key]);
    }
  };

  const resetAtoms = (stateObj) => {
    for (const key in stateObj) {
      setters[key](RESET);
    }
  };

  const resetAll = () => {
    for (const key in setters) {
      setters[key](RESET);
    }
  };

  return { setAtoms, resetAtoms, resetAll };
};

export default useAtomsGroup;
