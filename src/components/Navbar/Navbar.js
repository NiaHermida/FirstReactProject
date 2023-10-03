import "./Navbar.css";

function Navbar() {
  let browserName;
  const userAgent = window.navigator.userAgent;

  if (userAgent.includes("Chrome")) {
    browserName = "your browser is Chrome";
  } else if (userAgent.includes("Firefox")) {
    browserName = "your browser is Firefox";
  } else {
    browserName = "only God knows which browser you're using";
  }
  function clickReaction() {
    alert(
      `Hey! Why are you pushing me down like that? \nOkaaaaay, ${browserName}.`
    );
  }

  return (
    <>
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
          <button onClick={clickReaction}>I'm a nosy button</button>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
