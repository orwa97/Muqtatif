import { atomWithHash } from "jotai/utils";
import { HASHES } from "../../../../../constants";
import { DEFAULT_VALUES } from "../../../../../constants";

export const selectedThemeAtom = atomWithHash(
  HASHES.SELECTED_THEME,
  DEFAULT_VALUES.selectedTheme,
  {
    replaceState: true,
    delayInit: false,
  }
);
export const themeIsSelectedAtom = atomWithHash(
  HASHES.THEME_IS_SELECTED,
  false,
  {
    replaceState: true,
  }
);
