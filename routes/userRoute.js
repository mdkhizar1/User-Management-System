const { Router } = require("express");
const { getAllUsers, getSpecificUser, addOneUser, updateOneUser, removeOneUser } = require("../controllers/userController");
const { default: verifyToken } = require("../middleware/authMiddleware");

route = Router();

route.get("/getAllUsers", verifyToken, getAllUsers);
// http://localhost:5000/user/getAllUsers

route.get("/getSpecificUser/:id", verifyToken, getSpecificUser);
// http://localhost:5000/user/getSpecificUser/<id>

route.post("/addOneUser", verifyToken, addOneUser);
// URL Endpoint: http://localhost:5000/user/addOneUser
// Data sent as req body

route.put("/updateOneUser/:id", verifyToken, updateOneUser);
// http://localhost:5000/user/updateOneUser/<id>

route.delete("/removeOneUser/:id", verifyToken, removeOneUser);
// http://localhost:5000/user/removeOneUser/<id>

module.exports = route;