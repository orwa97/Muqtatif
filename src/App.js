import { Fragment } from "react";
import Button from "./components/button/Button";
import Select from "./components/Select/Select";

function App() {
  return (
    <Fragment>
      <Select postfix="post" options={["a", "b", "c", "d"]} />
      <Button />
    </Fragment>
  );
}

export default App;
