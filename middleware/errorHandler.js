const errorHandle = (err, res, req, next) => {
    let statusCode;
    let errors = []

    switch (err.name) {
        case "Validation isIn on role failed":
            statusCode = 400
            errors.push('role user tidak tepat, hanya bisa pilih admin atau staff')
            break;
        default:
            statusCode = 500
            errors.push('Internal Server Error')
            break;
    }

    res.status(statusCode).json(errors)
}

module.exports = errorHandle