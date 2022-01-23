import { atomWithHash } from "jotai/utils";
import { DEFAULT_VALUES } from "./defaultValues";

export const selectedVerseAtom = atomWithHash("verse", "", {
  replaceState: true,
  delayInit: false,
});

export const muqBGcolorAtom = atomWithHash(
  "muqBgColor",
  DEFAULT_VALUES.muqtatifBgColor,
  {
    replaceState: true,
    delayInit: false,
  }
);
