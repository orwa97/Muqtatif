import { Fragment } from "react";
import { ReactComponent as Settings } from "./images/SVG/cog.svg";
import Button from "./components/button/Button";
import Select from "./components/Select/Select";
import Slider from "./components/slider/Slider";
import RadioButtonsGroup from "./components/radioButtonsGroup/RadioButtonsGroup";
import Checkbox from "./components/checkbox/Checkbox";
import QuoteArea from "./components/quoteArea/QuoteArea";

function App() {
  return (
    <Fragment>
      <Select postfix="post" options={["a", "b", "c", "d"]} />
      <Button icon={<Settings />} type="icon-text">
        button
      </Button>
      <Slider />
      <RadioButtonsGroup
        label={[
          { option: "AA", id: "op1" },
          { option: "BB", id: "op2", checkedByDefault: true },
          { option: "CC", id: "op3" },
        ]}
      />
      <Checkbox
        checkbox={{ id: "CBx", name: "myCheckbox", label: "MyCheckbox" }}
      />
      <QuoteArea />
    </Fragment>
  );
}

export default App;
