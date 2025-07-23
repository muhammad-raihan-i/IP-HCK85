const bcrypt = require('bcryptjs');
const saltRounds = 10;
function hide(password) {
    return bcrypt.hashSync(password, saltRounds);
}
function check(password, hidden) {
    return bcrypt.compareSync(password, hidden);
}
module.exports = {
    hide,
    check
};