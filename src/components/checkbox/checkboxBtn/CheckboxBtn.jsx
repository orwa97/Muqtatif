import classes from "./CheckboxBtn.module.scss";

const checkboxBtn = (props) => {
  const size =
    props.size === "small"
      ? {
          ring: { width: "1.7rem", height: "1.7rem" },
          circle: { width: "1rem", height: "1rem" },
        }
      : props.size === "medium"
      ? {
          ring: { width: "2.2rem", height: "2.2rem" },
          circle: { width: "1.5rem", height: "1.5rem" },
        }
      : {
          ring: { width: "2.5rem", height: "2.5rem" },
          circle: { width: "1.8rem", height: "1.8rem" },
        };

  return (
    <>
      <input
        type="checkbox"
        id={`checkboxBtn-${props.id}`}
        value="checkboxBtn"
        className={classes.input}
        checked={props.isChecked}
        onChange={props.onChange}
        disabled={props.isDisabled}
      />
      <label
        htmlFor={`checkboxBtn-${props.id}`}
        className={`${classes.label} ${
          !props.isDisabled ? classes.hovered : ""
        }`}
      >
        <div
          className={classes.outerRing}
          style={{
            border: `2px solid ${props.color}`,
            width: size.ring.width,
            height: size.ring.height,
          }}
        >
          <div
            className={classes.innerCircle}
            style={{
              backgroundColor: props.color,
              width: size.circle.width,
              height: size.circle.height,
            }}
          ></div>
        </div>
      </label>
    </>
  );
};

export default checkboxBtn;
