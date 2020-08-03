import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import PerfectScrollbar from "react-perfect-scrollbar";
import ErrorDisplayer from "./components/ErrorDisplayer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Energy from "./pages/Energy";
import Partners from "./pages/Partners";
import Activities from "./pages/Activities";
import Volunteering from "./pages/Volunteering";
import Events from "./pages/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PerfectScrollbar>
        <Router>
          <Home path="/" />
          <Vision path="/vision" />
          <Volunteering path="/volunteer" />
          <Activities path="/activities" />
          <Energy path="/energy" />
          <Partners path="/partners" />
          <Contact path="/contact-us" />
          <Events path="/events" />
          <ErrorDisplayer default />
        </Router>
      </PerfectScrollbar>
      <Footer />
    </div>
  );
}

export default App;
