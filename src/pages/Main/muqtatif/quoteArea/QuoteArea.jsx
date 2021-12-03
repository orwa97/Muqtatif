import { Fragment } from "react";
import classes from "./QuoteArea.module.scss";
const QuoteArea = (props) => {
  return (
    // <div className={classes.quoteArea}>
    !props.backgroundIsDisabled ? (
      <spam
        className={classes.quoteAreaBackground}
        style={{
          width: `${props.width}%`,
          height: `${props.height}%`,
          backgroundColor: props.backgroundColor,
          opacity: props.opacity,
          filter: props.dropShadow,
        }}
      >
        <p className={classes.quote}>{props.quote}</p>
      </spam>
    ) : (
      <p className={classes.quote}>{props.quote}</p>
    )
  );
};

export default QuoteArea;
