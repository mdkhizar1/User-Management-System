const createConnection = require("./config/mongodbController");
require('dotenv').config();

const app = require("./app");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(process.env.PORT, (req, res) => {
    console.log("Server is running on port :", process.env.PORT);
    createConnection();
});