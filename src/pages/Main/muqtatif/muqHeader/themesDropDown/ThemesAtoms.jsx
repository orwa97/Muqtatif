import { atomWithHash } from "jotai/utils";
import { HASHES } from "../../../../../constants";
import { DEFAULT_VALUES } from "../../defaultValues";

export const SelectedThemeAtom = atomWithHash(
  HASHES.SELECTED_THEME,
  DEFAULT_VALUES.selectedTheme,
  {
    replaceState: true,
    delayInit: false,
  }
);
export const themeAtom = atomWithHash("theme", false, {
  replaceState: true,
});
