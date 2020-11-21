import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio/index.js";
import Contact from "./pages/Contact/index.js";
import About from "./pages/About/index.js";
import Navbar from "./components/NavBar/index.js";
import Footer from "./components/Footer/index.js";
import Wrapper from "./components/Wrapper/index.js";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
//  const [state, setState] = useState({})

  document.title = "React Portfolio";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
