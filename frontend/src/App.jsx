import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { UserForm } from "../components/user-form/UserForm";
import DisplayUsers from "../components/display-users/DisplayUsers";
import SignInUp from "../components/sign-in-up/SignInUp";
import Navbar from "../components/navbar/navbar";
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

  // Signed-In User Details
  // const [signedInUserName, setSignedInUserName] = useState("User");

  const navigate = useNavigate();

  function getUsers() {
    const savedToken = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/user/getAllUsers", {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
        // console.log(userData);
      })
      .catch((err) => {
        console.log("Something went wrong !");
        console.log("ERR:", err);
      });
  }

  function logoutUser() {
    alert("fn executed!");
    console.log("before removing token : ", localStorage.getItem("token"));
    localStorage.removeItem("token");

    //refresh UI data
    getUsers(); // Fetch the latest data from db, it updates state var, state var <=connected_to=> UI (UI updated)

    // Add navigation to sign-in logic
    navigate("/sign-in-up");
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignInUp />} />
        <Route path="/sign-in-up" element={<SignInUp />} />
        <Route
          path="/dashboard"
          element={
            <div>
              <div className="dashboard-navbar">
                <span>Hi {localStorage.getItem("signedInUserName")} !</span>
                {/* This should be name entered by user during sign-up */}
                {/* name is stored in formData state variable, create a new state variable here, pass it to the signup comp, put formData value in new state variable using set fn */}
                <button id="logout-btn" onClick={logoutUser}>
                  Logout
                </button>
              </div>
              <div className="dashboard">
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
            </div>
          }
        />
      </Routes>

      {/* Dashboard */}
    </>
  );
}

export default App;
