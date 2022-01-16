import { atomWithHash } from "jotai/utils";
import { DEFAULT_VALUES } from "./defaultValues";

export const selectedVerseAtom = atomWithHash("verse", "", {
  replaceState: true,
});
