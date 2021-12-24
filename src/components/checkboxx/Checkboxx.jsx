import classes from "./Checkboxx.module.scss";
import Checkbox from "react-checkbox-component";
import { Fragment } from "react";
const Checkboxx = (props) => {
  const chBxClickHandler = (e) => {
    props.onChBxClick(() => {
      return !props.isDisabled ? e : false;
    });
  };
  return (
    <Fragment>
      <label
        for={props.id}
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
          <Checkbox
            size={props.size}
            color={props.color}
            shape={props.shape}
            isChecked={props.isChecked}
            onChange={chBxClickHandler}
          />
        </div>
      </label>
    </Fragment>
  );
};

export default Checkboxx;
