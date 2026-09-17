const userModel = require("../model/userModel");
const { sign } = require("jsonwebtoken");

// const SECRET_KEY = "klajsd34j1kkjjhlakfdhjhahalhjlahhfj324kjhkhk2h3khk1k";

function createUserAccount(req, res) {
    const data = req.body;
    userModel.create(data).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

function handleLogin(req, res) {
    const userCredential = req.body; //.email => gives email input by user.      // .password => gives password

    userModel.findOne({ email: userCredential.email }).then((userData) => {      // find same email & fetching that record 
        // data var stores userData (name, email, password)

        if (userData && userCredential.password === userData.password) {         // user in db has data /not empty & password matched

            //1. Create token
            const token = sign(userCredential, process.env.SECRET_KEY);

            //2. Send token to frontend
            res.send({
                ok: "True",
                token: token,
                result: userData
            });

        } else {
            throw Error("Incorrect cred, check email or password");
        }

    }).catch((err) => {
        res.send({ ok: false, error: err.message });
    });

}

module.exports = { createUserAccount, handleLogin };







