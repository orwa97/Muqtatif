import { atomWithHash } from "jotai/utils";
import { DEFAULT_VALUES } from "../defaultValues";
export const fontFamilyAtom = atomWithHash(
  "fontFamily",
  DEFAULT_VALUES.fontFamily,
  {
    replaceState: true,
  }
);
export const fontSizeAtom = atomWithHash("fontSize", DEFAULT_VALUES.fontSize, {
  replaceState: true,
});
export const fontColorAtom = atomWithHash(
  "fontColor",
  DEFAULT_VALUES.fontColor,
  {
    replaceState: true,
  }
);
export const textAlignAtom = atomWithHash(
  "textAlign",
  DEFAULT_VALUES.textAlign,
  {
    replaceState: true,
  }
);
export const lineHeightAtom = atomWithHash(
  "lineHeight",
  DEFAULT_VALUES.lineHeight,
  {
    replaceState: true,
  }
);
