const errorHandle = (err, req, res,next) => {
    let statusCode = 500
    let errorsArray = []
    switch (err.name){
        case 'SequelizeUniqueConstraintError':
            statusCode = 400
            err.errors.forEach(element => {
                errorsArray.push(element.message)
            });
            break;
        case 'SequelizeValidationError':
            statusCode = 400
            err.errors.forEach(element => {
                errorsArray.push(element.message)
            });
            break;
        case 'errors':
            statusCode = 400
            err.errors.forEach(element => {
                errorsArray.push(element.message)
            });
            break;
        case 'id not available':
            statusCode = 400
            errorsArray.push('id not available')
            break;
        case 'email atau password salah':
            statusCode = 400
            errorsArray.push('email atau password salah')
            break;
        case 'sudah favorite':
            statusCode = 400
            errorsArray.push('sudah favorite')
            break;
        case 'tidak ada favorite tersebut':
            statusCode = 400
            errorsArray.push('tidak ada favorite tersebut')
            break;
        default:
            statusCode = 500
            errorsArray = 'Internal Server Errors'
            break;
    }
    res.status(statusCode).json({errors: errorsArray})
}

module.exports = errorHandle