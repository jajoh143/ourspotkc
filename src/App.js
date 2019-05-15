import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home"
import About from "./views/About"
import Resources from "./views/Resources"
import Navbar from "./views/Navbar"
import Footer from "./views/Footer"
import './style/app.scss';

function App() {
  return (
    <Router>
      <Navbar />
        <div id="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
        </div>
      <Footer />
    </Router>
  );
}

export default App;
