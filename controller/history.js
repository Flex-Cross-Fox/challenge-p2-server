let { History } = require('../models')

class controller{
    static postHistory(req, res, next){
        console.log(req.body);
        // History.create({})
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }

    static deleteHistory(req, res, next){
        console.log(req.params.id);
        // History.destroy({where: req.params.id})
        // .then((data) => {
        //     console.log(data);
        // })    
        // .catch((err) => {
        //     console.log(err);
        // })
    }

    static putHistory(req, res, next){
        console.log(req.body);
        console.log(req.params.id);
        // History.update({},{where: {id: req.params.id}})
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }

    static patchHistory(req, res, next){
        console.log(req.body);
        console.log(req.params.id);
    }
}

module.exports = controller