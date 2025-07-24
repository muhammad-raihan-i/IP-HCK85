const {User}= require("../models")
const bcrypt = require("../helpers/bcrypt.js")
const jwt = require("../helpers/jwt.js")
async function login(req,res,next) {
    try {
        let token=undefined
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user || !(await bcrypt.check(password,user.password))) {
            throw {name: "unauthorized", message: "Invalid credentials."};
        }
        token = jwt.make({username:user.username,phoneNumber:user.phoneNumber,id:user.id});
        token="Bearer "+token;
        console.log("-<{ TOKEN | START }>-")
        console.log("=====================================")
        console.log(token,"hai aku token")
        console.log("=====================================")
        console.log("-<{ TOKEN | E N D }>-")
        localstorage.setItem('token_project202507240929G', token);
        res.status(200).json({Authorization:token, message: "logged in" });
    } catch (err) {
        next(err);
    }
}
module.exports = login;

