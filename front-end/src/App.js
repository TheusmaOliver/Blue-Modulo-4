import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Personagem from "./Pages/Personagem/Personagem";
import logoBlue from "./assets/images/logo-blue-croped.gif";

import Form from "./Pages/Form/Form";
import GuardRoute from "./components/Guard/GuardRoute";
import Login from "./Pages/Login/Login";

export function App() {
  const isAuthenticated = Boolean(localStorage.getItem("JWT"));
  console.log(isAuthenticated);
  return (
    <div className="App">
      <img className="logo-blue" src={logoBlue} alt="logo blue" />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <GuardRoute
            path="/register"
            component={Form}
            auth={isAuthenticated}
          />
          <Route path="/edit/:id" exact component={Form} />
          <Route path="/about/:id" exact component={Personagem} />
        </Switch>
      </div>
    </div>
  );
}
