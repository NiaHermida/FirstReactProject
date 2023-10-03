// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FooterData from "../Footer/Footer";
import NewToDo from "../Form/Form";
import UserScreen from "../UserScreen/UserScreen";
import Navbar from "../Navbar/Navbar";
import React from "react";
import ToDoList from "../ToDoList/ToDoList";

function App() {
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
            <ToDoList />
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
