import "./App.css";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  function About() {
    return (
      <>
        <p>
          This is a practice site created so Tefi can stop sucking at React.
          We'll see if it works.
        </p>
        <p>|</p>
        <p>
          Stop judging me <span className="tincho">Tincho</span>
        </p>
      </>
    );
  }

  function Summary() {
    return (
      <>
        <h4>
          *Your current list has {easyTasksCount} easy tasks and{" "}
          {hardTasksCount} hard tasks.
        </h4>
        <h3 className="productivityNumber">
          Your done tasks amounted to {productivityNumber} productivity points.
        </h3>
      </>
    );
  }

  let browserName;
  const userAgent = window.navigator.userAgent;

  if (userAgent.includes("Chrome")) {
    browserName = "your browser is Chrome";
  } else if (userAgent.includes("Firefox")) {
    browserName = "your browser is Firefox";
  } else {
    browserName = "only God knows which browser you're using";
  }

  function MyButton() {
    function clickReaction() {
      alert(
        `Hey! Why are you pushing me down like that? \nOkaaaaay, ${browserName}.`
      );
    }
    return <button onClick={clickReaction}>I'm a nosy button</button>;
  }

  const user = {
    name: "Tef",
    imageURL: "/img/puppy.jpg",
  };

  const [toDoList, setToDoList] = useState([
    { title: "CaC Quiz", id: 1, isItDone: false, isItEasy: true, points: 2 },
    { title: "React Practice", id: 2, isItDone: false, isItEasy: false, points: 7 },
    { title: "Test Cases", id: 3, isItDone: false, isItEasy: false, points: 5 },
    { title: "Put away laundry", id: 4, isItDone: false, isItEasy: true, points: 1 },
    { title: "Hang out with Pili", id: 5, isItDone: false, isItEasy: true, points: 1 },
    { title: "Clean my sneakers", id: 6, isItDone: false, isItEasy: false, points: 5 },
  ]);

  const toDo = toDoList.map((item) => (
    <li
      key={item.id}
      className={
        item.isItDone ? "done" : "notDone" && item.isItEasy ? "easy" : "notEasy"
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
  ));

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

  const easyTasksCount = toDoList.filter(
    (item) => item.isItEasy === true
  ).length;
  const hardTasksCount = toDoList.filter((item) => !item.isItEasy).length;

  function AddTask() {
    if (showForm) {
      return (
        <form id="myForm">
          Task:
          <br />
          <input type="text" required></input>
          <br />
          Is it an easy task?
          <br />
          <input type="radio" name="difficulty" value="Yes" required></input>
          <label>Yes</label>
          <br />
          <input type="radio" name="difficulty" value="No"></input>
          <label>No</label>
          <br />
          Assign difficulty points:
          <br />
          <input type="number" required></input>
          <br />
          <button type="submit">Submit</button>
          <button onClick={toggleForm}>Close</button>
        </form>
      );
    } else {
      return <button onClick={toggleForm}>Create new task</button>;
    }
  }

  return (
    <div className="App">
      <div className="body">
        <div className="navBar">
          <ul>
            <li>
              <a href="/">My To-Do's</a>
            </li>
            <li>
              <a href="#">Create a new To-Do list</a>
            </li>
            <li>
              <a href="#">Check your latest progress</a>
            </li>
            <li>
              <MyButton />
            </li>
          </ul>
        </div>
        <div>
          <h1>Welcome to your favourite To-Do's app</h1>
        </div>
        <div className="mainRow">
          <div>
            <h3> User: {user.name} </h3>
            <img
              className="userPicture"
              src={user.imageURL}
              alt={"picture of user" + user.name}
            />
          </div>
          <div className="toDoList">
            <h3>To Do's</h3>
            <ul>{toDo}</ul>

            <div>
              <Summary />
            </div>
            <div className="addTask">
              <AddTask />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <About />
      </footer>
    </div>
  );
}

export default App;
