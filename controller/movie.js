let { Movie, History, Genre } = require('../models')
class movie{
    static allMovie(req, res, next){
        Movie.findAll({include: Genre})
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
        let { title, synopsis, trailerUrl, rating, genreId} = req.body
        console.log(req.body);
        console.log('berhasil masuk line 26');
        let newMovie = { title, synopsis, trailerUrl, status: 'active', imgUrl:req.body.imageUrl , rating, genreId, authorId: req.userLogin.id}
        Movie.create(newMovie)
        .then((data) => {
            return History.create({entityId: data.id, title: data.title, description: 'new entity with id created', updatedBy: data.authorId})
        })
        .then((data) => {
            console.log(data);
            console.log('di line 34');
            res.status(201).json(data)
        })
        .catch((err) => {
            console.log('di line 38');
            console.log(err);
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
        console.log('50 ini update ROW');
        let newMovie;
        let image = req.body.imageUrl
        let { title, synopsis, trailerUrl, rating, status ,genreId} = req.body
        console.log(req.body);
        if(image){
            console.log('ada image');
            newMovie = { title, synopsis, trailerUrl, rating, status, genreId, authorId: req.userLogin.id , imgUrl : image}
        }else{
            console.log('gk ada image');
            newMovie = { title, synopsis, trailerUrl, rating, status, genreId, authorId: req.userLogin.id}
        }
        Movie.update(newMovie,{where: {id: req.params.id}, returning: true})
        .then((data) => {
            return History.create({entityId: data[1][0].id, title: data[1][0].title, description: 'entity with id updated', updatedBy: data[1][0].authorId})
        })
        .then((data) => {
            if(data){
                res.status(200).json(data)
            }else if(err[0] == 0){
                next({name: 'id not available'})
            }else if(err.errors[0].message == 'Validation notEmpty on title failed'){
                next({name: 'Validation notEmpty on title failed'})
            }else if(err.errors[0].message == 'Validation min on rating failed'){
                next({name: 'Validation min on rating failed'})
            }else{
                next({name: ''})
            }
        })
        .catch((err) => {
            console.log(err);
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
        Movie.update({status: 'archived'}, {where: {id: req.params.id}, returning: true})
        .then((data) => {
            return History.create({entityId: data[1][0].id, title: data[1][0].title, description: 'entity with id permanent deleted', updatedBy: data[1][0].authorId})
        })
        .then((data) => {
            console.log(data);
            if(data){
                res.status(200).json({message: 'todo success to delete'})
            }else{
                next({name: 'id not available'})
            }
        })
        .catch((err) => {
            console.log('-----------');
            console.log(err);
            next({name: ''})
        })
    }

    static patch(req, res, next){
        Movie.update({status: 'inactive'}, {where: {id: req.params.id}, returning: true})
        .then((data) => {
            return History.create({entityId: data[1][0].id, title: data[1][0].title, description: 'entity with id status has been updated from active into inactive', updatedBy: data[1][0].authorId})
        })
        .then((data) => {
            console.log(data);
            if(data){
                res.status(200).json(data)
            }else{
                next({name: ''})
            }
        })
        .catch(() => {
            next({name: ''})
        })
    }
}

module.exports = movie;