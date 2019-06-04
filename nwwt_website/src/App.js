import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/healthandnutrition/">Health and Nutrition</Link>
            </li>
            <li>
              <Link to="/units/">Units</Link>
            </li>
            <li>
              <Link to="/collaboration/">Collaboration</Link>
            </li>
            <li>
              <Link to="/ourteam/">Our Team</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
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

function Home() {
  return <h2>Home</h2>;
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
