import React from "react";
import { useState } from "react";
import "../Styles/UserData.css"


function UserData({ user }) {
  

  return (
    <div className="details">
      <div className="name">
        <h2>{user.name}</h2>
      </div>
      <div className="role">
        <h2>{user.role}</h2>
      </div>
    </div>
  );
}

export default UserData;
