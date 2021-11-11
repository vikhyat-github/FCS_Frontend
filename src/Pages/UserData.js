import React from "react";
import { useState } from "react";
import "../Styles/UserData.css"
import {Icon} from "semantic-ui-react";


function UserData({ user }) {
  
  const deleteUser =()=>{
    fetch("http://192.168.1.11:5000/user/delete", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: user.user_name
      }),
    })
      

  }

  return (
    <div className="details">
      <div className="name">
        <h2>{user.name}</h2>
      </div>
      <div className="role">
        <h2>{user.role}</h2>
      </div>
      <div className="del" onClick={deleteUser} >
        <Icon name="trash icon"/>
        remove
      </div>

    </div>
  );
}

export default UserData;
