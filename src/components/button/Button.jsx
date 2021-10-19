import "./Button.scss";
import classNames from "classnames";
const Button = (props) => {
  return (
    <button
      className={classNames(
        "btn",
        { "btn--icon-only": props.type === "icon-only" },
        { "btn--text-only": props.type === "text-only" },
        { "btn--textNicon": props.type === "icon-text" }
      )}
    >
      {props.type != "text-only" && <div className="logo">{props.icon}</div>}
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "text-only",
};

export default Button;
