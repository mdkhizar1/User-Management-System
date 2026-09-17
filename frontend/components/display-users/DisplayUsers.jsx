import React, { useEffect } from "react";
import "./DisplayUsers.css";
import axios from "axios";
import deleteUser from "./deleteUser";
// import updateUser from "./updateUser";

export default function DisplayUsers({
  userData,
  getUsers,
  setFormMode,
  formMode,
  nameRef,
  emailRef,
  passRef,
  record_Id,
  set_Record_Id,
}) {
  useEffect(() => {
    // Hooks are written always in fn [RULE]
    getUsers();
  }, []);

  function updateUser(user) {
    // Set form mode to edit
    setFormMode("edit");

    //=============UPDATE PROCESS=============

    // 1. Take the current record user data (name, email, password, record_id)

    // 2. Set the form fields [each form field is linked to its ref variable]
    nameRef.current.value = user.name;
    emailRef.current.value = user.email;
    passRef.current.value = user.password;
    // console.log(user._id);
    set_Record_Id(user._id); // store id of record

    // 3. 4. in userform.jsx
  }

  return (
    <div style={{ padding: "50px", width: "100%" }} className="users">
      <div
        style={{
          width: "80%",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "0",
        }}
        className="data-container"
      >
        {/* <button onClick={getUsers}>Refresh</button> // Instead of fetching the data on clicking button, use useEffect => which means when this comp is showed on UI (mount first), execute logic in it. */}
        <table width={"100"} cellPadding={10} rules="rows">
          <caption>
            <h2>User's Data from database</h2>
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody align="center">
            {userData.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="update"
                    onClick={() => {
                      setFormMode("edit");
                      updateUser(user);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => {
                      deleteUser(user._id, getUsers, setFormMode);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
