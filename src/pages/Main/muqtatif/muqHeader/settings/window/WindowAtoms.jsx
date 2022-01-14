import { atomWithHash } from "jotai/utils";
import { DEFAULT_VALUES } from "../defaultValues";
export const aspectRatioAtom = atomWithHash(
  "aspectRatio",
  DEFAULT_VALUES.aspectRatio,
  {
    replaceState: true,
  }
);
export const textBgWidthAtom = atomWithHash(
  "TBGWidth",
  DEFAULT_VALUES.textBgWidth,
  {
    replaceState: true,
  }
);
export const textBgHeightAtom = atomWithHash(
  "TBGHeight",
  DEFAULT_VALUES.textBgHeight,
  {
    replaceState: true,
  }
);
export const textBgOpacityAtom = atomWithHash(
  "TBGOpacity",
  DEFAULT_VALUES.textBgOpacity,
  {
    replaceState: true,
  }
);
export const textBgColorAtom = atomWithHash(
  "TBGColor",
  DEFAULT_VALUES.textBgColor,
  {
    replaceState: true,
  }
);
export const dropShadowAtom = atomWithHash(
  "dropShadow",
  DEFAULT_VALUES.dropShadow,
  {
    replaceState: true,
  }
);
export const dropShadowOffsetYAtom = atomWithHash(
  "DSOffsetY",
  DEFAULT_VALUES.dropShadowOffsetY,
  {
    replaceState: true,
  }
);
export const dropShadowBlurAtom = atomWithHash(
  "DSBlur",
  DEFAULT_VALUES.dropShadowBlur,
  {
    replaceState: true,
  }
);

export const textBgAtom = atomWithHash(
  "textBg",
  DEFAULT_VALUES.textBgIsChecked,
  {
    replaceState: true,
  }
);
