import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import List from "./Components/List";

function App() {
  const [task, setTask] = useState("");
  const [ToDoList, setToDoList] = useState([]);
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
  let Change = (event) => {
    setTask(event.target.value);
  };

  let HandleClick = (event) => {
    if (task.trim() !== "") {
      setToDoList((prevList) => [...prevList, task]); // Add task to the ToDoList array
      setTask(""); // Clear the input field after adding to the list
      showAlert("Task Added Sucessfully", "success");
    } else {
      showAlert("Field can not be empty", "danger");
    }
    console.log(ToDoList.length);
  };
  return (
    <>
      <Navbar heading="Let'sDO" title="Home" title2="List" />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          heading="Enter task"
          ClickEvent={HandleClick}
          changeEvent={Change}
        />

        <List arr={ToDoList} />
      </div>
    </>
  );
}

export default App;
