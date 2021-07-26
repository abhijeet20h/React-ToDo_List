import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDoList from "./Components/ToDoList";
function App() {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setinputList(e.target.value);
  };

  const addData = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList(" ");
  };

  const deleteItems = (id)=> {
        // console.log("dddddddd")
        setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=> {
          return index !== id;
        })
  })
  }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            onChange={itemEvent}
            placeholder=" Add a Items"
          />
          <button onClick={addData}> + </button>

          <ol>
            {" "}
            {/* <li>{inputList}</li> */}
            {items.map((itemValue, index) => {
              return <ToDoList key={index} id={index} onSelect={deleteItems} text={itemValue} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
