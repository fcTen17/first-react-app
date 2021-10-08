
import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => {
  return <h2>Home</h2>;
}
const About = () => {
  return <h2>About</h2>;
}
const Contact = () => {
  return <h2>Contact</h2>;
}

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router>
      <div className="container">
        <h2>React Router Demo</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <a href="/about/">About (normal anchor link, page will full reload)</a>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <hr />
        <p>Using Switch</p>
        <Switch>
         
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;








//Original content

/*

import logo from './logo.svg';
import './App.css';

//import * as math from './math.js';
//import product from './math.js';
import product, { numbers } from './math.js';

console.log(numbers.reduce(product));
console.log(product(10, 5));
//console.log(math.numbers.reduce(math.sum));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/