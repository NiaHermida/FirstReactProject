import { USER } from "../App/App.constants";
import "./UserScreen.css";

function UserScreen() {
  return (
    <>
      <h3> User: {USER.name} </h3>
      <img
        className="userPicture"
        src={USER.imageURL}
        alt={"picture of user" + USER.name}
      />
    </>
  );
}

export default UserScreen;
