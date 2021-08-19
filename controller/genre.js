const { Genre } = require('../models')
class GenreController{
    static basicPage(req, res){
        Genre.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) =>{ 
            res.status(500).json(err)
        })
    }//done

    static addGenre(req, res){
        Genre.create({name: req.body.name})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            if(err.errors[0].message){
                res.status(400).json(err.errors[0].message)
            }else{
                res.status(400).json(err)
            }
        })
    }//done

    static aGenre(req, res){
        Genre.findOne({where: {id: req.params.id}})
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

    static delete(req, res){
        Genre.destroy({where: {id: req.params.id}})
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

    static updateRow(req, res){
        Genre.update({name: req.body.name},{where: {id: req.params.id}})
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
}

module.exports = GenreController;