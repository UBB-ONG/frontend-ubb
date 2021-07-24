import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
