import classes from "./QuoteArea.module.scss";
import { useAtomValue } from "jotai/utils";

import {
  dropShadowAtom,
  dropShadowBlurAtom,
  dropShadowOffsetYAtom,
  textBgAtom,
  textBgColorAtom,
  textBgHeightAtom,
  textBgOpacityAtom,
  textBgWidthAtom,
} from "../muqHeader/settings/window/WindowAtoms";
import {
  fontColorAtom,
  fontFamilyAtom,
  fontSizeAtom,
  lineHeightAtom,
  textAlignAtom,
} from "../muqHeader/settings/editor/EditorAtoms";
const QuoteArea = (props) => {
  const dropShadow = `drop-Shadow(3px ${useAtomValue(
    dropShadowOffsetYAtom
  )}px ${useAtomValue(dropShadowBlurAtom)}px rgba(0, 0, 0, 0.45))`;

  const styles = {
    width: `${useAtomValue(textBgWidthAtom)}%`,
    height: `${useAtomValue(textBgHeightAtom)}%`,
    backgroundColor: useAtomValue(textBgColorAtom),
    opacity: useAtomValue(textBgOpacityAtom),
    fontSize: `${useAtomValue(fontSizeAtom)}rem`,
    color: useAtomValue(fontColorAtom),
    fontFamily: useAtomValue(fontFamilyAtom),
    textAlign: useAtomValue(textAlignAtom),
    lineHeight: useAtomValue(lineHeightAtom),
    dropShadow: useAtomValue(dropShadowAtom) ? dropShadow : "none",
  };

  return (
    <span
      className={classes.quoteAreaBackground}
      style={
        useAtomValue(textBgAtom)
          ? {
              width: styles.width,
              height: styles.height,
              backgroundColor: styles.backgroundColor,
              opacity: styles.opacity,
              filter: styles.dropShadow,
            }
          : { backgroundColor: "transparent" }
      }
    >
      <p
        className={classes.quote}
        style={{
          fontSize: styles.fontSize,
          color: styles.color,
          fontFamily: styles.fontFamily,
          textAlign: styles.textAlign,
          lineHeight: styles.lineHeight,
        }}
      >
        {props.quote}
      </p>
    </span>
  );
};

export default QuoteArea;
