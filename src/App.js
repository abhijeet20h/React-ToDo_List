import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const[ inputList , setinputList ]= useState("");
 const itemEvent = (e) => {
  setinputList(e.target.value)
  }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" onChange={itemEvent} placeholder=" Add a Items" />
          <button> + </button>

          <ol>
            {" "}
            <li>{inputList}</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
