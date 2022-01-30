import { useAtomValue } from "jotai/utils";
import { SelectedThemeAtom } from "../muqHeader/themesDropDown/ThemesAtoms";
import classes from "./QuoteBackground.module.scss";
const QuoteBackground = (props) => {
  const imgNum = useAtomValue(SelectedThemeAtom).split("-")[2];
  const aspectRatio = props.aspectRatio.split(":").join("/");
  return (
    <span
      style={{
        aspectRatio: aspectRatio,
        backgroundColor: props.backgroundColor,
        backgroundImage: !!imgNum
          ? `url(${
              require(`../../../../images/themes/theme_${imgNum}.png`).default
            })`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={classes.background}
    >
      {props.children}
    </span>
  );
};

export default QuoteBackground;
