import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

export function App() {
  return (
    <div className="App">
      <header className="App-header">Personagens</header>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </div>
    </div>
  );
}
