// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { TODO_INITIAL_DATA } from "./App.constants";
import FooterData from "../Footer/Footer";
import NewToDo from "../Form/Form";
import UserScreen from "../UserScreen/UserScreen";
import Navbar from "../Navbar/Navbar";

function App() {
  const [toDoList, setToDoList] = useState(TODO_INITIAL_DATA);

  // try doing this with a forEach instead of 2 filters
  function Summary() {
    return (
      <>
        <h4>
          *Your current list has{" "}
          {toDoList.filter((item) => item.isItEasy === true).length} easy tasks
          and {toDoList.filter((item) => !item.isItEasy).length} hard tasks.
        </h4>
        <h3 className="productivityNumber">
          Your done tasks amounted to {productivityNumber} productivity points.
        </h3>
      </>
    );
  }

  const onCheckboxChange = (itemId) => {
    const updatedList = toDoList.map((item) => {
      if (item.id === itemId) {
        return { ...item, isItDone: !item.isItDone };
      }
      return item;
    });
    setToDoList(updatedList);
  };

  const productivityNumber = toDoList.reduce((totalPoints, item) => {
    if (item.isItDone === true) {
      totalPoints += item.points;
    }
    return totalPoints;
  }, 0);

  return (
    <div className="App">
      <div className="Body">
        <div className="Navbar">
          <Navbar />
        </div>
        <div>
          <h1>Welcome to your favourite To-Do's app</h1>
        </div>
        <div className="mainRow">
          <div>
            <UserScreen />
          </div>
          <div className="toDoList">
            <h3>To Do's</h3>
            <ul>
              {toDoList.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.isItDone
                      ? "done"
                      : "notDone" && item.isItEasy
                      ? "easy"
                      : "notEasy" //ver classNames
                  }
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={item.isItDone}
                      onChange={() => onCheckboxChange(item.id)}
                    />
                    <span className="labelToDoList">{item.title}</span>{" "}
                    <span className="tasksPoints">{item.points}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div>
              <Summary />
            </div>
            <div className="addTask">
              <NewToDo />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <FooterData />
      </footer>
    </div>
  );
}

export default App;
