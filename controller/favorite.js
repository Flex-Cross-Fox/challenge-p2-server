const { bookmark, Movie, User } = require('../models')
class Favorite {
    static addMovie (req, res, next){
        bookmark.findOne({where: {noUser: req.userLogin.id, noMovie: req.params.id}})
        .then((data) => {
            if(data == null){
                return bookmark.create({noUser: req.userLogin.id, noMovie: req.params.id})
            }else{
                return {name: 'sudah favorite'}
            }
        })
        .then((data) => {
            if(data.name){
                next({name: 'sudah favorite'})
            }else{
                res.status(201).json(data)
            }
        })
        .catch(() => {
            next({name: ''})
        })
    }

    static getBookmark (req, res, next) {
        bookmark.findAll({where: { noUser: req.userLogin.id }, include: [Movie, User]})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(() => {
            next({})
        })
    }

    static delete (req, res, next) {
        bookmark.destroy({where: {noUser: req.userLogin.id, noMovie: req.params.id}})
        .then((data) => {
            if(!data){
                next({name: 'tidak ada favorite tersebut'})
            }else{
                res.status(201).json(data)
            }
        })
        .catch(() => {
            next({})
        })
    }
}

module.exports = Favorite;