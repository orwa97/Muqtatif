import { atomWithHash } from "jotai/utils";
import { DEFAULT_VALUES } from "../../defaultValues";

export const SelectedThemeAtom = atomWithHash(
  "theme",
  DEFAULT_VALUES.selectedTheme,
  {
    replaceState: true,
  }
);
