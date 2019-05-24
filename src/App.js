import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog/Blog";
import Resources from "./views/Resources/Resources";
import Navbar from "./views/Shared/Navbar";
import Events from "./views/Events/Events";
import Footer from "./views/Shared/Footer";
import "./style/app.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/resources" component={Resources} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
