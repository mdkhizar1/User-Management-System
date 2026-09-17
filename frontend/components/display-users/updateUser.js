import axios from "axios";

export default function updateUser(user_id, getUsers) {
    const URL = `http://localhost:5000/user/removeOneUser/${user_id}`;

    axios.post(URL, user_id).then((data) => {
        console.log("Data deleted successfully!");
        console.log("Success message: ", data);
        getUsers()

    }).catch((err) => {
        console.log("Error while deleting user");
        console.log("Error message: ", err);
    });

    getUsers(); // Fetch the latest data from db, it updates state var, state var <=connected_to=> UI (UI updated)
}