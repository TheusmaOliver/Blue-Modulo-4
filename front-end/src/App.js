import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Personagem from "./Pages/Personagem/Personagem";
import logoBlue from "./assets/images/logo-blue-croped.gif";

import Form from "./Pages/Form/Form";

export function App() {
  return (
    <div className="App">
      <img className="logo-blue" src={logoBlue} alt="logo blue" />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:id" exact component={Personagem} />
          <Route path="/edit/:id" exact component={Form} />
        </Switch>
      </div>
    </div>
  );
}
