import React, { useState } from "react";

export default function TextForm(props) {
  const ChangetoUpper = () => {
    console.log("Upper case");
    let Uppertext = text.toUpperCase();
    newText(Uppertext);
    props.showAlert("Converted to Uppercase", "success");
  };

  const ChangetoLower = () => {
    let Uppertext = text.toLowerCase();
    newText(Uppertext);
    props.showAlert("Converted to Lowercase", "success");
  };

  const Change = (event) => {
    console.log("Upper case");
    newText(event.target.value);
  };
  const [text, newText] = useState("Enter text");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={Change}
            value={text}
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "#000000" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
          <br />
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={ChangetoUpper}
          >
            Convert to Uppercase
          </button>

          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={ChangetoLower}
          >
            Convert to Lowercase
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#000000",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          Words{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          , Characters {text.length}
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>
      </div>
    </>
  );
}
