let { Movie } = require('../models')
class movie{
    static allMovie(req, res, next){
        Movie.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            next({name: ''})
        })
    }

    static aMovie(req, res, next){
        Movie.findOne({where: {id: req.params.id}})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            next({name: ''})
        })
    }

    static addMovie(req, res, next){
        let { title, synopsis, trailerUrl, imgUrl, rating, genreId} = req.body
        let newMovie = { title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId: req.userLogin.id}
        Movie.create(newMovie)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            if(err.name == 'SequelizeForeignKeyConstraintError'){
                next({name: 'SequelizeForeignKeyConstraintError'})
            }else if(err.errors[0].message == 'Validation min on rating failed'){
                next({name: 'Validation min on rating failed'})
            }else if(err.errors[0].message == 'Validation notEmpty on title failed'){
                next({name: 'Validation notEmpty on title failed'})
            }else{
                next({name: ''})
            }
        })
    }

    static updateRow(req, res, next){
        let { title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId} = req.body
        let newMovie = { title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId}
        Movie.update(newMovie,{where: {id: req.params.id}, returning: true})
        .then((data) => {
            res.status(200).json(data[1][0])
        })
        .catch((err) => {
            if(err[0] == 0){
                next({name: 'id not available'})
            }else if(err.errors[0].message == 'Validation notEmpty on title failed'){
                next({name: 'Validation notEmpty on title failed'})
            }else if(err.errors[0].message == 'Validation min on rating failed'){
                next({name: 'Validation min on rating failed'})
            }else{
                next({name: ''})
            }
        })
    }

    static delete(req, res, next){
        Movie.destroy({where: {id: req.params.id}})
        .then((data) => {
            if(data){
                res.status(200).json({message: 'todo success to delete'})
            }else{
                next({name: 'id not available'})
            }
        })
        .catch(() => {
            next({name: ''})
        })
    }
}

module.exports = movie;