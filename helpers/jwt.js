const jwt = require('jsonwebtoken');

function jwtToken(input){
    return jwt.sign(input, 'secret');
};

module.exports = { jwtToken };