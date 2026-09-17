const {connect} = require("mongoose");
const url = "mongodb://localhost:27017/Ecommercedb"

function createConnection(){
    connect(url).then((data)=>{
        console.log("backend connected to database!");
    }).catch((error)=>{
        console.log("Failed to connect to the database!");
        console.log(error);
    });
}

module.exports = createConnection;