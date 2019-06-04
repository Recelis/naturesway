import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/home.js";
import NWWTNavbar from "./NWWTnavbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NWWTNavbar />
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/healthandnutrition/" component={Healthandnutrition} />
        <Route path="/units/" component={Units} />
        <Route path="/collaboration/" component={Collaboration} />
        <Route path="/ourteam/" component={Ourteam} />
        <Route path="/contact/" component={Contact} />
      </Router>
    </div>
  );
}


function Healthandnutrition() {
  return <h2>healthandnutrition</h2>;
}

function Units() {
  return <h2>Units</h2>;
}
function Collaboration() {
  return <h2>Collaboration</h2>;
}

function Ourteam() {
  return <h2>Ourteam</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
