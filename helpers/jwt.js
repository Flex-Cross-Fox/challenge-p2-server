const jwt = require('jsonwebtoken');

function Encoded(rawJson){
    return jwt.sign(rawJson, 'secret');
};

function Decoded(tokenEncoded){
    return jwt.verify(tokenEncoded,'secret')
}

module.exports = { Encoded, Decoded };