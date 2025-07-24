const jwt = require('../helpers/jwt');
function loginGate(req, res, next) {
    let token
    console.log(req.headers,"hai aku konsol log")
    if(req.headers.authorization){
        token=req.headers.authorization
    }
    console.log(token)
    let token2=token.split(" ")
    console.log(token2,"ini token2")
    //let token=localstorage.getItem('token_project202507240929G')
    if (token2[0]!=="Bearer"||!token2[1]) {
        return res.status(401).json({ message:'Login required!'});
    }
    let authResult=jwt.check(token2[1]);
    if (!authResult) {
        return res.status(401).json({ message:'Invalid credentials!'});
    }
    next();
}
function loginGate2(req, res, next) {
    //do nothing;
}

module.exports = {loginGate, loginGate2};