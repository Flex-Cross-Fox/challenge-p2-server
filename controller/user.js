const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { jwtToken } = require('../helpers/jwt')

class user{
    static allUser(req, res){
        User.findAll()
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(data)
        })
    }//done

    static addUser(req, res){
        let { username, email, password, role, phoneNumber, address} = req.body
        let newUser = { username, email, password, role, phoneNumber, address}
        User.create(newUser)
        .then((data) => {
            console.log(data);
            res.status(201).json(data)    
        })
        .catch((err) => {
            console.log(err);
            if(err.errors[0].message){
                res.status(500).json(err.errors[0].message)
            }else{
                res.status(500).json(err)
            }
        })
    }//done

    static delete(req, res){
        User.destroy({where: {id: req.params.id}})
        .then((data) => {
            if(data == 0){
                res.status(400).json({msg: 'id tersebut tidak ada'})
            }else{
                res.status(200).json({msg: 'berhasil delete id tersebut'})
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }//done

    static aUser(req, res){
        User.findOne({where: {id: req.params.id}})
        .then((data) => {
            if(data == null){
                res.status(400).json({msg: 'id tersebut tidak ada'})
            }else{
                res.status(200).json(data)
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }

    static updateRow(req, res){
        console.log(req.body);
        // .then((data) => {
        //     if(data[0] == 1){
        //         res.status(200).json({msg: 'berhasil update data'})
        //     }else{
        //         res.status(400).json({msg: 'id tersebut tidak ada'})
        //     }
        // })
        // .catch((err) => {
        //     res.status(400).json(err)
        // })
    }

    static login(req, res){
        User.findOne({})
        // let token = jwtToken()
    }
};

module.exports = user;