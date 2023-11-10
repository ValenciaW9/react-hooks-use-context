import React, { useContext } from "react";
import Interests from "./Interests";
import UserContext from "./UserContext";

function Profile({ theme }) {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;