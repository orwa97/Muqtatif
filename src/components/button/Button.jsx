import "./Button.scss";
import classNames from "classnames";
import Tippy from "@tippyjs/react";
const Button = (props) => {
  return (
    <div
      className={`btn-container ${props.className}`}
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <Tippy
        content={props.tippyContent}
        placement={props.tippyPlacement}
        trigger={props.tippyTrigger}
        interactive="true"
        delay={0}
        duration={100}
      >
        <button
          className={classNames(
            "btn",
            { "btn--icon-only": props.type === "icon-only" },
            { "btn--text-only": props.type === "text-only" },
            { "btn--textNicon": props.type === "icon-text" },
            { "btn--w-postfix": !!props.postfix }
          )}
          onClick={props.onClick}
          disabled={props.isDisabled}
        >
          {props.type !== "text-only" && (
            <div className="btn__logo">{props.icon} </div>
          )}
          {props.children}
        </button>
      </Tippy>
      {props.postfix && <div className="btn__postfix">{props.postfix}</div>}
    </div>
  );
};

Button.defaultProps = {
  type: "text-only",
};

export default Button;
