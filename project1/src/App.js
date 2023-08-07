import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, SetMode] = useState("light");
  const [modeRed, SetModeRed] = useState("light");

  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  };

  const ChangeMode = () => {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "#000000";
      showAlert("Dark mode enabled", "success");
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtills"
          mode={mode}
          modeRed={modeRed}
          toggeleMode={ChangeMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter text to analyze"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
