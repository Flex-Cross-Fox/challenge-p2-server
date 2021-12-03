const { Genre } = require('../models')
class GenreController{
    static basicPage(req, res, next){
        Genre.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) =>{ 
            next({name: ''})
        })
    }

    static addGenre(req, res, next){
        Genre.create({name: req.body.name})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            next({name: 'errors', error: err.errors})
        })
    }

    static aGenre(req, res, next){
        Genre.findOne({where: {id: req.params.id}})
        .then((data) => {
            if(data == null){
                next({name: 'id not available'})
            }else{
                res.status(200).json(data)
            }
        })
        .catch(() => {
        })
    }

    static delete(req, res, next){
        Genre.destroy({where: {id: req.params.id}})
        .then((data) => {
            if(data == 0){
                next({name: 'id not available'})
            }else{
                res.status(200).json({msg: 'berhasil delete id tersebut'})
            }
        })
        .catch(() => {
        })
    }

    static updateRow(req, res, next){
        Genre.update({name: req.body.name},{where: {id: req.params.id}})
        .then((data) => {
            if(data[0] == 1){
                res.status(200).json({msg: 'berhasil update data'})
            }else{
                next({name: 'id not available'})
            }
        })
        .catch(() => {
        })
    }
}

module.exports = GenreController;