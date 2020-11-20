import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio/index.js";
import Contact from "./pages/Contact/index.js";
import "./App.css";
import Navbar from "./components/NavBar/index.js";
import Footer from "./components/Footer/index.js";
import Wrapper from "./components/Wrapper/index.js";

function App() {
  document.title = "React Portfolio";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
