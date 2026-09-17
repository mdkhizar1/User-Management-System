const mongoose = require("mongoose");

// Create schema
const schemaObj = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

// Create model using schema
const userModel = mongoose.model("users", schemaObj);

module.exports = userModel;