import "./App.css";
import { useState } from "react";

function App() {
  
  function MyButton() {
    function clickReaction() {
      alert(
        `Hey! Why are you pushing me down like that? \nOkaaaaay, your browser is ${browserName}.`
      );
    }
    return <button onClick={clickReaction}>I'm a nosy button</button>;
  }

  function About() {
    return (
      <>
        <p>
          This is a practice site created so Tefi can stop sucking at React.
          We'll see if it works.
        </p>
        <p>|</p>
        <p>
          Stop judging me <span>Tincho</span>
        </p>
      </>
    );
  }

  let browserName;
  const userAgent = window.navigator.userAgent;

  if (userAgent.includes("Chrome")) {
    browserName = "Chrome";
  } else if (userAgent.includes("Firefox")) {
    browserName = "Firefox";
  } else {
    browserName = "God knows which browser you're using";
  }

  const user = {
    name: "Tef",
    imageURL: "/img/puppy.jpg",
  };

  const [toDoList, setToDoList] = useState([
    { title: "CaC Quiz", id: 1, isItDone: false, isItEasy: true },
    { title: "React Practice", id: 2, isItDone: false, isItEasy: false },
    { title: "Test Cases", id: 3, isItDone: false, isItEasy: false },
  ]);

  const toDo = toDoList.map((item) => (
    <li
      key={item.id}
      className={item.isItDone ? "done" : "notDone" && item.isItEasy ? "easy" : "notEasy"
      } //podría crear un sistema de puntos para cada uno y despues usar un reduce para ver qué tan productivo fuiste ese día
    >
      <label>
        <input
          type="checkbox"
          checked={item.isItDone}
          onChange={() => onCheckboxChange(item.id)}
        />
        {item.title}
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

  return (
    <div className="App">
      <div className="body">
        <div className="navBar">
          <ul>
            <li>
              <a href="/">My To-Do's</a>
            </li>
            <li>
              <a href="#">Create a new To-Do</a>
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
            <ul>
              {toDo}
            </ul>
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
