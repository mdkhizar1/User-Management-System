import { useState, useRef } from "react";

import "./App.css";
import { UserForm } from "../components/user-form/UserForm";
import DisplayUsers from "../components/display-users/DisplayUsers";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);

  // Add/Update toggle
  const [formMode, setFormMode] = useState("add");

  // Record fields
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const [record_Id, set_Record_Id] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:5000/user/getAllUsers")
      .then((res) => {
        setUserData(res.data);
        // console.log(userData);
      })
      .catch((err) => {
        console.log("Something went wrong !");
        console.log("ERR:", err);
      });
  }

  return (
    <>
      <div className="app">
        <div className="user-form-container">
          <UserForm
            getUsers={getUsers}
            formMode={formMode}
            setFormMode={setFormMode}
            nameRef={nameRef}
            emailRef={emailRef}
            passRef={passRef}
            record_Id={record_Id}
            set_Record_Id={set_Record_Id}
          />
        </div>

        <div className="display-users-container">
          <DisplayUsers
            userData={userData}
            getUsers={getUsers}
            setFormMode={setFormMode}
            formMode={formMode}
            nameRef={nameRef}
            emailRef={emailRef}
            passRef={passRef}
            record_Id={record_Id}
            set_Record_Id={set_Record_Id}
          />
        </div>
      </div>
    </>
  );
}

export default App;
