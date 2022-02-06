import { atomWithHash } from "jotai/utils";
import { HASHES } from "../../../constants";
import { DEFAULT_VALUES } from "./defaultValues";

export const selectedVerseAtom = atomWithHash(HASHES.SELECTED_VERSE, "", {
  replaceState: true,
});

export const muqBgColorAtom = atomWithHash(
  HASHES.MUQ_BG_COLOR,
  DEFAULT_VALUES.muqtatifBgColor,
  {
    replaceState: true,
  }
);
