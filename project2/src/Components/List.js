import React from "react";

export default function List(props) {
  const HandleClick = (arr) => {
    elements.pop(arr);
    props.arr.pop(arr);
    console.log(props.arr.length);
  };
  const elements = [];
  {
    for (let i = 0; i < props.arr.length; i++) {
      elements.push(
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.arr[i]}</strong>
        </div>
      );
    }
  }

  return (
    <>
      <h1 className="mt-3">To do Tasks</h1>
      {elements}
    </>
  );
}
