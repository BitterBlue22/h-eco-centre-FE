import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import PerfectScrollbar from "react-perfect-scrollbar";
import ErrorDisplayer from "./components/ErrorDisplayer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <PerfectScrollbar>
        <Router>
          <ErrorDisplayer default />
        </Router>
      </PerfectScrollbar>
    </div>
  );
}

export default App;
