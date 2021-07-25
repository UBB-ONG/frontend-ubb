import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SectionsContext from "./contexts/SectionsContext";
import Header from "./components/header/Header";
import Home from "./pages/Home";

export default function App() {
  const [componentRefs, setComponentRefs] = useState({});
  return (
    <BrowserRouter>
      <SectionsContext.Provider value={{ componentRefs, setComponentRefs }}>
        <Header />
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </SectionsContext.Provider>
    </BrowserRouter>
  );
}
