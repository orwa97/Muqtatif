import { atomWithHash } from "jotai/utils";
import { HASHES } from "../../../../../../constants";
import { DEFAULT_VALUES } from "../../../defaultValues";
export const aspectRatioAtom = atomWithHash(
  HASHES.ASPECT_RATIO,
  DEFAULT_VALUES.aspectRatio,
  {
    replaceState: true,
  }
);
export const presetSizeAtom = atomWithHash(
  HASHES.SELECTED_AR,
  DEFAULT_VALUES.selectedAR,
  {
    replaceState: true,
  }
);
export const textBgAtom = atomWithHash(
  HASHES.TEXT_BG_CHECKED,
  DEFAULT_VALUES.textBgIsChecked,
  {
    replaceState: true,
  }
);
export const textBgWidthAtom = atomWithHash(
  HASHES.TEXT_BG_WIDTH,
  DEFAULT_VALUES.textBgWidth,
  {
    replaceState: true,
  }
);
export const textBgHeightAtom = atomWithHash(
  HASHES.TEXT_BG_HEIGHT,
  DEFAULT_VALUES.textBgHeight,
  {
    replaceState: true,
  }
);
export const textBgOpacityAtom = atomWithHash(
  HASHES.TEXT_BG_OPACITY,
  DEFAULT_VALUES.textBgOpacity,
  {
    replaceState: true,
  }
);
export const textBgColorAtom = atomWithHash(
  HASHES.TEXT_BG_COLOR,
  DEFAULT_VALUES.textBgColor,
  {
    replaceState: true,
  }
);
export const dropShadowAtom = atomWithHash(
  HASHES.DROPSHADOW_CHECKED,
  DEFAULT_VALUES.dropShadow,
  {
    replaceState: true,
  }
);
export const dropShadowOffsetYAtom = atomWithHash(
  HASHES.DROPSHADOW_OFFSET,
  DEFAULT_VALUES.dropShadowOffsetY,
  {
    replaceState: true,
  }
);
export const dropShadowBlurAtom = atomWithHash(
  HASHES.DROPSHADOW_BLUR,
  DEFAULT_VALUES.dropShadowBlur,
  {
    replaceState: true,
  }
);
