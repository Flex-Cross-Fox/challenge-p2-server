const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { Encoded } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

class user{
    // static allUser(req, res, next){
    //     User.findAll()
    //     .then((data) => {
    //         res.status(200).json(data)
    //     })
    //     .catch((err) => {
    //         next({name:''})
    //     })
    // }

    static addUser(req, res, next){
        let { email, password} = req.body
        let newUser = { username : 'test', email, password, role: 'admin', phoneNumber: '1234567', address: 'batam'}
        User.create(newUser)
        .then((data) => {
            // console.log(data);
            res.status(201).json(data)    
        })
        .catch((err) => {
            if(err.errors[0].message == 'Validation isIn on role failed'){
                next({name: 'Validation isIn on role failed'})
            }else if(err.errors[0].message == 'Validation len on password failed'){
                next({name: 'Validation len on password failed'})
            }else if(err.errors[0].message == 'email must be unique'){
                next({name: 'email must be unique'})
            }else{
                console.log(err);
                next({name: ''})
            }
        })
    }
    
    static login(req, res, next){
        User.findOne({where: {email: req.body.email}})
        .then((data) => {
            if(data){
                let result = comparePassword(req.body.password, data.dataValues.password)
                if(result){
                    let jwsToken = Encoded({email: req.body.email})
                    res.status(200).json({token: jwsToken})
                }else{
                    next({msg: 'salah email atau password'})
                }
            }else{
                next({msg: 'salah email atau password'})
            }
        })
        .catch(() => {
            next({name: ''})
        })
    }
    
    static googleLogin(req, res, next){
        let payload;
        const client = new OAuth2Client(process.env.CLIENT_GOOGLE);
        client.verifyIdToken({
            idToken: req.body.idtoken,
            audience: process.env.CLIENT_GOOGLE,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
        .then((ticket) => {
            payload = ticket.getPayload()
            return User.findOne({where: {email: payload.email}})
        })
        .then((data) => {
            if(!data){
                return User.create({email: payload.email, password: process.env.PASSWORD_GOOGLE})
            }else{
                return { email: data.email, password: data.password}
            }
        })
        .then((data) => {
            const payload = { email: data.email, id: data.id}
            const access_token = Encoded(payload)
            res.status(200).json({ access_token})
        })
        .catch((err) => {
            console.log(err);
            next(err)
        })
    }

    // static delete(req, res, next){
    //     User.destroy({where: {id: req.params.id}})
    //     .then((data) => {
    //         if(data == 0){
    //             next({name: 'id not available'})
    //         }else{
    //             res.status(200).json({msg: 'berhasil delete id tersebut'})
    //         }
    //     })
    //     .catch(() => {
    //         next({name: ''})
    //     })
    // }

    // static aUser(req, res, next){
    //     User.findOne({where: {id: req.params.id}})
    //     .then((data) => {
    //         if(data == null){
    //             next({name: 'id not available'})
    //         }else{
    //             res.status(200).json(data)
    //         }
    //     })
    //     .catch(() => {
    //         next({name: ''})
    //     })
    // }

    // static updateRow(req, res, next){
    //     let { username, email, password, role, phoneNumber, address } = req.body
    //     User.update({username, email, password, role, phoneNumber, address}, {where: {id: req.params.id}})
    //     .then((data) => {
    //         if(data[0] == 1){
    //             res.status(200).json({msg: 'berhasil update data'})
    //         }else{
    //             next({name: 'id not available'})
    //         }
    //     })
    //     .catch((err) => {
    //         next({name: ''})
    //     })
    // }

};

module.exports = user;