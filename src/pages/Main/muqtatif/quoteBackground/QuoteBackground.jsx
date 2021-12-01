import classes from "./QuoteBackground.module.scss";

const QuoteBackground = (props) => {
  const size = { width: "", height: "" };
  // switch (props.aspectRatio) {
  //   case "1:1":
  //     size.width = "108rem";
  //     size.height = "108rem";
  //     break;
  //   case "16:9":
  //     size.width = "128rem";
  //     size.height = "72rem";
  //     break;
  //   case "9:16":
  //     size.width = "108rem";
  //     size.height = "192rem";
  //     break;
  //   case "2:1":
  //     size.width = "102.4rem";
  //     size.height = "51.2rem";
  //     break;
  // }
  // const size = {
  //   width: props.size.split(":")[0],
  //   height: props.size.split(":")[1],
  // };
  // console.log(size);
  const aspectRatio = props.aspectRatio.split(":").join("/");
  return (
    <spam
      style={{
        aspectRatio: aspectRatio,
        backgroundColor: props.backgroundColor,
      }}
      className={classes.background}
    >
      {props.children}
    </spam>
  );
};

export default QuoteBackground;
