import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import PerfectScrollbar from "react-perfect-scrollbar";
import ErrorDisplayer from "./components/ErrorDisplayer";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <PerfectScrollbar>
        <Router>
          <ErrorDisplayer default />
        </Router>
      </PerfectScrollbar>
    </div>
  );
}

export default App;
