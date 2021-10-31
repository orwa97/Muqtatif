import classes from "./QuoteBackground.module.scss";

const QuoteBackground = (props) => {
  return <spam className={classes.background}>{props.children}</spam>;
};

export default QuoteBackground;
