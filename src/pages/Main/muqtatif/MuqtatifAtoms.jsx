import { atomWithHash } from "jotai/utils";
import { DEFAULT_VALUES } from "./defaultValues";

export const selectedVerseAtom = atomWithHash("verse", "", {
  replaceState: true,
});

export const muqBgColorAtom = atomWithHash(
  "muqBgColor",
  DEFAULT_VALUES.muqtatifBgColor,
  {
    replaceState: true,
  }
);
