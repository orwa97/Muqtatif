import classes from "./Checkbox.module.scss";
const Checkbox = (props) => {
  return (
    <div className={classes.checkboxContainer}>
      <label className={classes.checkboxLabel} for={props.checkbox.id}>
        {props.checkbox.label}
      </label>
      <input
        type="checkbox"
        id={props.checkbox.id}
        name={props.checkbox.name}
      />
    </div>
  );
};

export default Checkbox;
