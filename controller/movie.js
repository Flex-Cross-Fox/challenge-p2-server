let { Movie } = require('../models')
class movie{
    static allMovie(req, res){
        Movie.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    }

    static aMovie(req, res){
        Movie.findOne({where: {id: req.params.id}})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    }

    static addMovie(req, res){
        let { title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId} = req.body
        let newMovie = { title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId}
        Movie.create(newMovie)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err.name)
        })
    }

    static updateRow(req, res){
        let { title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId} = req.body
        let newMovie = { title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId}
        Movie.update(newMovie,{where: {id: req.params.id}, returning: true})
        .then((data) => {
            res.status(200).json(data[1][0])
        })
        .catch((err) => {
            console.log(err);
            if(err.errors[0].message){
                res.status(400).json(err.errors[0].message)
            }else if(err[0] == 0){
                res.status(500).json({msg: 'id tersebut tidak ada'})
            }else{
                res.status(500).json(err)
            }
        })
    }

    static delete(req, res){
        Movie.destroy({where: {id: req.params.id}})
        .then((data) => {
            res.status(200).json({message: 'todo success to delete'})
        })
        .catch(() => {
            res.status(500).json({mgs: 'error'})
        })
    }
}

module.exports = movie;