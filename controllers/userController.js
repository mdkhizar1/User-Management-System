const userModel = require("../model/userModel");


function getAllUsers(req, res) {

    //Process the request / Execute controller logic
    userModel.find().then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send("Something went wrong!!!")
        console.log(error);
    });

}

function getSpecificUser(req, res) {
    const idValue = req.params.id;    // Data from client sent as query params
    userModel.findOne({ _id: idValue }).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send("Something went wrong");
        console.log(error);
    });
}

function addOneUser(req, res) {
    const data = req.body;            // Data from client sent as req body
    userModel.create(data).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send("Something went wrong");
        console.log(error);
    });
}

function removeOneUser(req, res) {
    const idValue = req.params.id;    // Data from client sent as query params
    userModel.deleteOne({ _id: idValue }).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send("Something went wrong");
        console.log(error);
    });
}

function updateOneUser(req, res) { // Explained by sir
    const idValue = req.params.id;
    // console.log(idValue);
    console.log("Record ID (backend): ", idValue);
    userModel.updateOne(
        { _id: idValue },       // Which record?
        { $set: req.body }      // What should be updated?
    ).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send("Something went wrong while updating the data");
        console.log(err);
    });

}

module.exports = { getAllUsers, getSpecificUser, addOneUser, updateOneUser, removeOneUser };