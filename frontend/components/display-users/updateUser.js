import axios from "axios";

export default function updateUser(user_id, getUsers) {
    console.log("fn called");
    const URL = `http://localhost:5000/user/updateOneUser/${user_id}`;

    const savedToken = localStorage.getItem("token");

    axios.post(URL, user_id, { headers: { Authorization: `Bearer ${savedToken}` } }).then((data) => {
        console.log("Data updated successfully!");
        console.log("Success message: ", data);

    }).catch((err) => {
        console.log("Error while updating user");
        console.log("Error message: ", err);
    });
    getUsers(); // Fetch the latest data from db, it updates state var, state var <=connected_to=> UI (UI updated)
}