const {User}= require("../models")
const bcrypt = require("../helpers/bcrypt.js")
const jwt = require("../helpers/jwt.js")
async function login(req,res,next) {
    try {
        let token=undefined
        const { username, password } = req.body;
        console.log(req.body)
        const user = await User.findOne({ where: { username } });
        console.log(user,"hai aku user")
        if (!user || !(await bcrypt.check(password,user.password))) {
            throw {name: "unauthorized", message: "Invalid credentials."};
        }
        token = jwt.make({username:user.username,phoneNumber:user.phoneNumber,id:user.id});
        console.log("-<{ TOKEN | START }>-")
        console.log("=====================================")
        console.log(token,"hai aku token")
        console.log("=====================================")
        console.log("-<{ TOKEN | E N D }>-")
        res.status(200).json({token, message: "logged in" });
    } catch (err) {
        next(err);
    }
}
module.exports = login;

