import classes from "./QuoteArea.module.scss";
const QuoteArea = (props) => {
  return (
    <spam
      className={classes.quoteArea}
      style={{
        width: `${props.width}%`,
        height: `${props.height}%`,
        backgroundColor: props.backgroundColor,
        opacity: props.opacity,
      }}
    >
      <p className={classes.quote}>{props.quote}</p>
    </spam>
  );
};

export default QuoteArea;
