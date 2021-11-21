import classes from "./QuoteArea.module.scss";
const QuoteArea = (props) => {
  return (
    <spam className={classes.quoteArea}>
      <p className={classes.quote}>{props.quote}</p>
    </spam>
  );
};

export default QuoteArea;
