import { atomWithHash } from "jotai/utils";
import { defaultValues } from "../defaultValues";
export const fontFamilyAtom = atomWithHash(
  "fontFamily",
  defaultValues.fontFamily,
  {
    replaceState: true,
  }
);
export const fontSizeAtom = atomWithHash("fontSize", defaultValues.fontSize, {
  replaceState: true,
});
export const fontColorAtom = atomWithHash(
  "fontColor",
  defaultValues.fontColor,
  {
    replaceState: true,
  }
);
export const textAlignAtom = atomWithHash(
  "textAlign",
  defaultValues.textAlign,
  {
    replaceState: true,
  }
);
export const lineHeightAtom = atomWithHash(
  "lineHeight",
  defaultValues.lineHeight,
  {
    replaceState: true,
  }
);
