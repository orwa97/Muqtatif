import { atomWithHash } from "jotai/utils";

export const aspectRatioAtom = atomWithHash("aspectRatio", "16:9");
export const textBgWidthAtom = atomWithHash("TBG-width", "45");
export const textBgHeightAtom = atomWithHash("TBG-height", "45");
export const textBgOpacityAtom = atomWithHash("TBG-opacity", "1");
export const textBgColorAtom = atomWithHash("TBG-color", "#fff");
export const dropShadowAtom = atomWithHash("dropShadow", false);
export const dropShadowOffsetYAtom = atomWithHash("DS-offsetY", "3");
export const dropShadowBlurAtom = atomWithHash("DS-blur", "10");
