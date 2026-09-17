import jwt from "jsonwebtoken";
const { verify } = jwt;

// const SECRET_KEY = "klajsd34j1kkjjhlakfdhjhahalhjlahhfj324kjhkhk2h3khk1k";

export default function verifyToken(req, res, next) {
    //check if token is present with request

    if (req.headers.authorization) {
        const token = req.headers.authorization.slice(7);

        // 2. Verify the token
        verify(token, process.env.SECRET_KEY, (err, data) => {
            if (err) {
                console.log("Invalid Token!");
            }
            else {
                console.log("Token verified successfully!");
                next();  //Execute controller logic
            }
        });
    }
}