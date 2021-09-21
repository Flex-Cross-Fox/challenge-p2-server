const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { Encoded } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

class user{
    static addUser(req, res, next){
        let { username, role, email, password} = req.body
        let newUser = { username, email, password, role, phoneNumber: '1234567', address: 'batam'}
        User.create(newUser)
        .then((data) => {
            // console.log(data);
            let { username, email, role, phoneNumber, address } = data
            res.status(201).json({username, email, role, phoneNumber, address})    
        })
        .catch((err) => {
            // console.log(err);
            // console.log(err.errors[0].message);
            next(err)
        })
    }//done
    
    static login(req, res, next){
        User.findOne({where: {email: req.body.email}})
        .then((data) => {
            if(data){
                let result = comparePassword(req.body.password, data.dataValues.password)
                if(result){
                    let jwsToken = Encoded({email: req.body.email})
                    res.status(200).json({token: jwsToken})
                }else{
                    next({name: 'email atau password salah'})
                }
            }else{
                next({name: 'email atau password salah'})
            }
        })
        .catch(() => {
            
        })
    }
    
    static googleLogin(req, res, next){
        let payload;
        const client = new OAuth2Client(process.env.CLIENT_GOOGLE);
        client.verifyIdToken({
            idToken: req.body.idtoken,
            audience: process.env.CLIENT_GOOGLE
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
};

module.exports = user;