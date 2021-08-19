let { User } = require('../models');
class user{
    static allUser(){
        User.findAll()
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(data)
        })
    }

    static addUser(req, res){
        console.log(req.body);
        let { username, email, password, role, phonumber, address} = req.body
    }
};

module.exports = user;