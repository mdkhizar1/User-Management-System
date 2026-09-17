const { Router } = require("express");
const { createUserAccount, handleLogin } = require("../controllers/authController");

route = Router(); // route is a fun, at last export this fn!

//Sign-Up
route.put("/sign-up", createUserAccount);
// Request Type: PUT
// Data as: Req body
// URL: http://localhost:5000/auth/sign-up

//Sign-In
route.get("/sign-in", handleLogin);
// Request Type: GET
// Data as: Req body
// URL: http://localhost:5000/auth/sign-in


module.exports = route;