import React from "react";
import "../Styles/UserPage.css";
import { useState ,useEffect} from "react";
import UserData from "./UserData";


function UserPage() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/user/getall`)
      .then((res) => res.json())
      .then((data) => {setUsers(data.users)
      console.log(data)});
  }, []);

  return (
    <div>
      <div className="heading">
        <h1>User Details</h1>
      </div>
      <div className="user_detail">
        {Users.map((user, idx) => {
          return <UserData user={user} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default UserPage;