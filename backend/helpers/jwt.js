const jwt=require('jsonwebtoken');
const secret = process.env.JWT_SECRET

function make(obj){
    return jwt.sign(obj, secret, { expiresIn: '1h' })
}
function check(token){
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        return err
    }
}//async???!?!?!!

module.exports = {
    make,
    check
};