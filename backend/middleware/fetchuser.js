var jwt = require('jsonwebtoken');
const jwt_screat = "SurajIsGood";

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send({ error: "Please authenticate using a valid token" })
    try {
        const user = jwt.verify(token, jwt_screat)
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({ error: "Invalid token" })
    }
}

module.exports = fetchuser;