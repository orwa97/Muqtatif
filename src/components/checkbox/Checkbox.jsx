import classes from "./Checkbox.module.scss";
import { Fragment } from "react";
import CheckboxBtn from "./checkboxBtn/CheckboxBtn";
const Checkbox = (props) => {
  const chBxBtnHandler = (e) => {
    console.log(e);
    props.onChBxbtnChange(() => {
      return !props.isDisabled ? e.target.checked : false;
    });
  };
  return (
    <Fragment>
      <label
        htmlFor={props.id}
        className={`${classes.checkboxBtn} ${props.className}`}
        onClick={props.onClick}
        style={{ borderBottom: props.borderBottom }}
      >
        <input
          type="checkbox"
          id={props.id}
          name="chBx"
          className={classes.chBxInput}
          disabled={props.isDisabled}
          onChange={props.onChange}
          checked={props.isChecked}
        />
        {props.label}
        <div className={classes.checkbox}>
          <CheckboxBtn
            size={props.size}
            color={props.color}
            isChecked={props.isChecked}
            onChange={chBxBtnHandler}
            id={props.id}
            isDisabled={props.isDisabled}
          />
        </div>
      </label>
    </Fragment>
  );
};

export default Checkbox;
