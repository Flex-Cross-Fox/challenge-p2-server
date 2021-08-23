const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { Encoded, Decoded } = require('../helpers/jwt')

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

    static addUser(req, res, next){
        let { username, email, password, role, phoneNumber, address} = req.body
        let newUser = { username, email, password, role, phoneNumber, address}
        User.create(newUser)
        .then((data) => {
            console.log(data);
            res.status(201).json(data)    
        })
        .catch((err) => {
            console.log('masuk line 27');
            // console.log(err);
            if(err.errors[0].message == 'Validation isIn on role failed'){
                console.log(err.errors[0].message,'<----');
                next({name: 'Validation isIn on role failed'})
                // res.status(500).json(err.errors[0].message)
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
    }//done

    static updateRow(req, res){
        let { username, email, password, role, phoneNumber, address } = req.body
        User.update({username, email, password, role, phoneNumber, address}, {where: {id: req.params.id}})
        .then((data) => {
            if(data[0] == 1){
                res.status(200).json({msg: 'berhasil update data'})
            }else{
                res.status(400).json({msg: 'id tersebut tidak ada'})
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }//done

    static login(req, res){
        User.findOne({where: {email: req.body.email}})
        .then((data) => {
            if(data){
                let result = comparePassword(req.body.password, data.dataValues.password)
                if(result){
                    let jwsToken = Encoded({email: req.body.email})
                    res.status(200).json({token: jwsToken})
                }else{
                    throw new Error('salah email atau password')
                }
            }else{
                throw new Error('salah email atau password')
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }
};

module.exports = user;