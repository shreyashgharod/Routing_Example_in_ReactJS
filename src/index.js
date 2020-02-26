import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";

import About from "./components/About";
import Home from "./components/Home";
import Skillset from "./components/Skillset";

const App = () => (
  <Router>
    <div>
      <ul id="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skillset">Skillset</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skillset" component={Skillset} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
