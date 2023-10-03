import { useState } from "react";
import "./Form.css";

function NewToDo() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

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

export default NewToDo;
