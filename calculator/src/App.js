import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-3 ">
            <input
              type="text"
              name=""
              id=""
              className="text-box mt-2"
              value={value}
            />
            <br />
            <br />

            <button
              type="button"
              class="btn calculator"
              value={""}
              onClick={(e) => setValue("")}
            >
              AC
            </button>
            <button
              type="button"
              class="btn calculator"
              value={""}
              onClick={(e) => setValue(value.slice(0, -1))}
            >
              DE
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"."}
              onClick={(e) => setValue(value + e.target.value)}
            >
              .
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"/"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              /
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"7"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              7
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"8"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              8
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"9"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              9
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"*"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              *
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"4"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              4
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"5"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              5
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"6"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              6
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"+"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              +
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"1"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              1
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"2"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              2
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"3"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              3
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"-"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              -
            </button>

            <button
              type="button"
              class="btn calculator"
              value={"0"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              0
            </button>
            <button
              type="button"
              class="btn calculator"
              value={"00"}
              onClick={(e) => setValue(value + e.target.value)}
            >
              00
            </button>
            <button
              type="button"
              class="btn calculator-equal"
              value={"="}
              onClick={(e) =>
                setValue(
                  !(
                    value.endsWith("+") ||
                    value.endsWith("-") ||
                    value.endsWith("*") ||
                    value.endsWith("/")
                  )
                    ? eval(value) + ""
                    : ""
                )
              }
            >
              =
            </button>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default App;
