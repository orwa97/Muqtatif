import classes from "./QuoteArea.module.scss";
const QuoteArea = () => {
  return (
    <div className={classes.quoteArea}>
      <p className={classes.quote}>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
    </div>
  );
};

export default QuoteArea;
