import { atomWithHash } from "jotai/utils";
import { defaultValues } from "../defaultValues";
export const aspectRatioAtom = atomWithHash(
  "aspectRatio",
  defaultValues.aspectRatio,
  {
    replaceState: true,
  }
);
export const textBgWidthAtom = atomWithHash(
  "TBGWidth",
  defaultValues.textBgWidth,
  {
    replaceState: true,
  }
);
export const textBgHeightAtom = atomWithHash(
  "TBGHeight",
  defaultValues.textBgHeight,
  {
    replaceState: true,
  }
);
export const textBgOpacityAtom = atomWithHash(
  "TBGOpacity",
  defaultValues.textBgOpacity,
  {
    replaceState: true,
  }
);
export const textBgColorAtom = atomWithHash(
  "TBGColor",
  defaultValues.textBgColor,
  {
    replaceState: true,
  }
);
export const dropShadowAtom = atomWithHash(
  "dropShadow",
  defaultValues.dropShadow,
  {
    replaceState: true,
  }
);
export const dropShadowOffsetYAtom = atomWithHash(
  "DSOffsetY",
  defaultValues.dropShadowOffsetY,
  {
    replaceState: true,
  }
);
export const dropShadowBlurAtom = atomWithHash(
  "DSBlur",
  defaultValues.dropShadowBlur,
  {
    replaceState: true,
  }
);

export const textBgAtom = atomWithHash(
  "textBg",
  defaultValues.textBgIsChecked,
  {
    replaceState: true,
  }
);
