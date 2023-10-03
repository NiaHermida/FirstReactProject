import { useState } from "react";
import { TODO_INITIAL_DATA } from "../App/App.constants";
import Summary from "../Summary/Summary";

function ToDoList() {
  const [toDoList, setToDoList] = useState(TODO_INITIAL_DATA);

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
    <>
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
        <Summary toDoList={toDoList} />
      </div>
    </>
  );
}
export default ToDoList;
