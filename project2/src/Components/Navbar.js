import React from "react";
import { a } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" herf="#">
          {props.heading}
        </a>
      </div>
    </nav>
  );
}
