import { ReactComponent as Settings } from "./images/SVG/cog.svg";

import Button from "./components/button/Button";
import Select from "./components/Select/Select";
import QuoteArea from "./pages/Main/muqtatif/quoteArea/QuoteArea";
import Layout from "./components/layout/Layout";
import { Fragment } from "react";
import Main from "./pages/Main/Main";
import ColorPicker from "./components/colorPicker/ColorPicker";
import ReactSelect from "./components/reactSelect/ReactSelect";
import Search from "./pages/search/Search";

function App() {
  return <Search />;
  // <Main />;

  // <Fragment>
  //   <Select postfix="post" options={["a", "b", "c", "d"]} />
  //   <Button icon={<Settings />} type="icon-text">
  //     button
  //   </Button>
  //   <Slider />
  //   <RadioButtonsGroup
  //     label={[
  //       { option: "AA", id: "op1" },
  //       { option: "BB", id: "op2", checkedByDefault: true },
  //       { option: "CC", id: "op3" },
  //     ]}
  //   />
  //   <Checkbox
  //     checkbox={{ id: "CBx", name: "myCheckbox", label: "MyCheckbox" }}
  //   />
  //   <QuoteArea />
  // </Fragment>
}

export default App;
