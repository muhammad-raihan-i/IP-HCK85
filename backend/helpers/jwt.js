const jwt=require('jsonwebtoken');
const secret = process.env.JWT_SECRET

function make(obj){
    return jwt.sign(obj, secret)
}
function check(token){
    try {
        let result=jwt.verify(token, secret)
        console.log(result)
        return result
    } catch (err) {
        return err
    }
}//async???!?!?!!

module.exports = {
    make,
    check
};

