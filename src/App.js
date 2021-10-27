import { ReactComponent as Settings } from "./images/SVG/cog.svg";
import { ReactComponent as Copy } from "./images/SVG/copy.svg";

import Button from "./components/button/Button";
import Select from "./components/Select/Select";
import QuoteArea from "./components/quoteArea/QuoteArea";
import Layout from "./components/layout/Layout";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <SearchBar results={["a", "b", "c"]} />

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
  );
}

export default App;
