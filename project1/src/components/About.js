import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    background: props.mode === "dark" ? "black" : "white",
    border: props.mode === "dark" ? "1px solid white" : "black",
  };
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              nobis nesciunt optio reprehenderit ullam dolores corrupti.
              Voluptates aspernatur veniam suscipit accusantium. Delectus soluta
              ipsam odit, assumenda iste sunt, harum voluptas reprehenderit
              quaerat voluptatum reiciendis!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              porro repudiandae vero voluptatibus totam voluptas nulla aliquam
              deserunt similique, unde vitae dicta amet cum iusto aliquid
              ducimus, quos non corporis qui quaerat expedita earum.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              fugiat illum laboriosam? Nam, alias quam eaque quibusdam, possimus
              quis facere repellendus obcaecati amet eos nesciunt nostrum
              tempora, quas blanditiis neque iusto! Reiciendis, quis dolorem!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
