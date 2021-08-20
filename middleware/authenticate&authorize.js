const { Movie, User } = require('../models');
const { Decoded } = require('../helpers/jwt');

function authenticate(req, res, next){
    try {
        let jwsToken = Decoded(req.headers.token);
        console.log(jwsToken);
        User.findOne({where: {email: jwsToken.email}})
        .then((data) => {
            if(data){
                console.log(data.id);
                req.userLogin = {id: data.id, role: data.role}
                console.log(req.userLogin.id);
                next()
            }else{
                throw new Error('tidak ada yang login')
            }
        })
        .catch((err) => {
            console.log(err);
            next(err)
        })
    } catch (error) {
        next(error)
    }
};

function authorizeAdmin(req, res, next){
    if(req.userLogin.role == 'admin'){
        next()
    }else{
        Movie.findOne({where: {id: req.params.id}})
        .then((data) => {
            if(data.authorId == req.userLogin.id){
                next()
            }else{
                next('ini bukan milik anda')
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)    
        })
    }
};

module.exports = { authenticate, authorizeAdmin };