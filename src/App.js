import Main from "./pages/Main/Main";
import Search from "./pages/search/Search";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Search />
      </Route>
      <Route path="/quran/:verseKey">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
