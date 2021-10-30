import "./Button.scss";
import classNames from "classnames";
const Button = (props) => {
  return (
    <div className="btn-container">
      <button
        className={classNames(
          "btn",
          { "btn--icon-only": props.type === "icon-only" },
          { "btn--text-only": props.type === "text-only" },
          { "btn--textNicon": props.type === "icon-text" },
          { "btn--w-postfix": !!props.postfix },
          props.className
        )}
      >
        {props.type !== "text-only" && (
          <div className="btn__logo">{props.icon} </div>
        )}
        {props.children}
      </button>
      {props.postfix && <div className="btn__postfix">{props.postfix}</div>}
    </div>
  );
};

Button.defaultProps = {
  type: "text-only",
};

export default Button;
