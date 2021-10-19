import { Fragment } from "react";
import { ReactComponent as Settings } from "./images/SVG/cog.svg";
import Button from "./components/button/Button";
import Select from "./components/Select/Select";

function App() {
  return (
    <Fragment>
      <Select postfix="post" options={["a", "b", "c", "d"]} />
      <Button icon={<Settings />} type="icon-text">
        button
      </Button>
    </Fragment>
  );
}

export default App;
