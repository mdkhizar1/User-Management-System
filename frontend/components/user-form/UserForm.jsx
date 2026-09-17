import { useRef } from "react";
import axios from "axios";

import "./UserForm.css";

export function UserForm({
  getUsers,
  formMode,
  setFormMode,
  nameRef,
  emailRef,
  passRef,
  record_Id,
  set_Record_Id,
}) {

  // Form Handler
  function formSubmit() {
    event.preventDefault();

    if (formMode === "add") {
      //Execute Create Account Logic
      const newUser = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value,
      };

      // Create a New User in Database
      axios
        .post("http://localhost:5000/user/addOneUser", newUser)
        .then((res) => {
          // console.log(res.data); // NOTE: Its compulsary to write and use res prop
          // console.log("data sent successfully");

          // Take the record id and store it in record_id ref variable, we can use it to update a record.
          // console.log(res.data._id); => this gives id of a record, using this store record_id of each and every record, which can be later used to perform update // we can use this record_id to fetch this specific record.
          set_Record_Id(res.data._id);

          //After sending data, make form fields empty
          nameRef.current.value = "";
          emailRef.current.value = "";
          passRef.current.value = "";

          // Fetch the latest data from db, store in db & refresh ui
          getUsers();
        })
        .catch((err) => {
          console.log("error while sending data");
          console.log(err);
        });

      // Fetch the latest data from db, it updates state var, state var <=connected_to=> UI (UI updated)
      getUsers();
    } else if (formMode === "edit") {
      // Update a user in database
      // 4. create an object containing all users info
      const updateUser = {
        // 3. Get the updated form fields from form
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value,
      };

      // 5. make put/update request using that object
      const URL = `http://localhost:5000/user/updateOneUser/${record_Id}`;
      console.log("URL(frontend): ", URL);
      axios
        .put(URL, updateUser)
        .then((response) => {
          console.log("Data successfully updated:", response.data);

          // fetch the latest data from db, update state var (update UI)
          getUsers();
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });

      //=============UPDATE PROCESS COMPLETED !=============
      // After editing => change the mode back to "add" (form mode was by default "add", we change it to "edit" when update button of record was pressed, after update operation is done, we change it back to default i.e. "add")
      setFormMode("add");

      // make all fields empty
      nameRef.current.value = "";
      emailRef.current.value = "";
      passRef.current.value = "";
    }
  }

  return (
    <>
      <div className="signup-container">
        <form onSubmit={formSubmit}>
          <h2 style={{ color: "green", textAlign: "center" }}>
            {formMode === "add" ? "Add New User" : "Update User"}
          </h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              ref={nameRef}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              ref={emailRef}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              ref={passRef}
            />
          </div>
          <button type="submit">
            {formMode === "edit" ? "Update User" : "Add User"}
          </button>
        </form>
      </div>
    </>
  );
}
