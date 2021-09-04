import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SectionsContext from "./contexts/SectionsContext";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [componentRefs, setComponentRefs] = useState({});
  return (
    <BrowserRouter>
      <ToastContainer />
      <SectionsContext.Provider value={{ componentRefs, setComponentRefs }}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/landing" component={Landing} exact />
        </Switch>
      </SectionsContext.Provider>
    </BrowserRouter>
  );
}
