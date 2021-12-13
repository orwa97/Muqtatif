import { Fragment } from "react";
import classes from "./QuoteArea.module.scss";
const QuoteArea = (props) => {
  const backgroundColor = `rgba(${props.backgroundColor.r}, ${props.backgroundColor.g}, ${props.backgroundColor.b})`;

  return (
    // <div className={classes.quoteArea}>
    !props.backgroundIsDisabled ? (
      <span
        className={classes.quoteAreaBackground}
        style={{
          width: `${props.width}%`,
          height: `${props.height}%`,
          backgroundColor: backgroundColor,
          opacity: props.opacity,
          filter: props.dropShadow,
        }}
      >
        <p
          className={classes.quote}
          style={{
            fontSize: `${props.fontSize}rem`,
            color: props.textColor,
            fontWeight: props.fontWeight,
            fontFamily: props.fontFamily,
          }}
        >
          {props.quote}
        </p>
      </span>
    ) : (
      <p className={classes.quote}>{props.quote}</p>
    )
  );
};

export default QuoteArea;
