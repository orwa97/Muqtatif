import { atomWithHash } from "jotai/utils";
import { HASHES } from "../../../../../../constants";
import { DEFAULT_VALUES } from "../../../defaultValues";
export const fontFamilyAtom = atomWithHash(
  HASHES.FONT_FAMILY,
  DEFAULT_VALUES.fontFamily,
  {
    replaceState: true,
  }
);
export const fontSizeAtom = atomWithHash(
  HASHES.FONT_SIZE,
  DEFAULT_VALUES.fontSize,
  {
    replaceState: true,
  }
);
export const fontColorAtom = atomWithHash(
  HASHES.FONT_COLOR,
  DEFAULT_VALUES.fontColor,
  {
    replaceState: true,
  }
);
export const textAlignAtom = atomWithHash(
  HASHES.TEXT_ALIGN,
  DEFAULT_VALUES.textAlign,
  {
    replaceState: true,
  }
);
export const lineHeightAtom = atomWithHash(
  HASHES.LINE_HEIGHT,
  DEFAULT_VALUES.lineHeight,
  {
    replaceState: true,
  }
);
