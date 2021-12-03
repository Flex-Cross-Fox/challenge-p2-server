let bcrypt = require('bcryptjs');

function hash(password){
    return bcrypt.hashSync(password, 10);
};

function comparePassword(passwordInput, passwordUser){
    return bcrypt.compareSync(passwordInput, passwordUser);
};

module.exports = { hash, comparePassword };