import classes from "./QuoteBackground.module.scss";

const QuoteBackground = (props) => {
  const size = { width: "", height: "" };

  const aspectRatio = props.aspectRatio.split(":").join("/");
  return (
    <span
      style={{
        aspectRatio: aspectRatio,
        backgroundColor: props.backgroundColor,
      }}
      className={classes.background}
    >
      {props.children}
    </span>
  );
};

export default QuoteBackground;
