import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Click on the checkbox to get authenticated</h1>
      <p className="authText">
        {isAuthenticated
          ? "You are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>
      <label>
        <input
          type="checkbox"
          onChange={toggleAuth}
          checked={isAuthenticated}
        />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
