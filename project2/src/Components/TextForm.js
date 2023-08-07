import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  return (
    <>
      <div className="container">
        <div className="mt-5 mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={props.changeEvent}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-success"
          onClick={props.ClickEvent}
        >
          Add to List
        </button>
      </div>
    </>
  );
}
