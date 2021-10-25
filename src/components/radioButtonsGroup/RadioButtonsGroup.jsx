import "./RadioButtonsGroup.scss";
const RadioButtonsGroup = (props) => {
  const labels = props.label.map((item, i) => {
    return (
      <div className="radioBtn">
        {item.checkedByDefault ? (
          <input
            type="radio"
            id={`btn-${item.id}`}
            name="btn"
            checked="checked"
          ></input>
        ) : (
          <input type="radio" id={`btn-${item.id}`} name="btn"></input>
        )}

        <label className="radio-label" for={`btn-${item.id}`}>
          {item.option}
        </label>
      </div>
    );
  });
  return <div className="radioBtnBox">{labels}</div>;
};

export default RadioButtonsGroup;
