const errorHandle = (err, req, res,next) => {
    let statusCode;
    let errors = []

    switch (err.name) {
        //user
        case "Validation isIn on role failed":
            statusCode = 400
            errors.push('role user tidak tepat, hanya bisa pilih admin atau staff')
            break;
        case "Validation len on password failed":
            statusCode = 400
            errors.push('password nya terlalu pendek, minimal harus 5 alfabet atau angka')
            break;
        case "email must be unique":
            statusCode = 400
            errors.push('email ini sudah di pakai sama user lain, mohon pakai email lain dan tidak boleh sama email nya')
            break;
        case "id not available":
            statusCode = 400
            errors.push('id tersebut tidak ada')
            break;
        case "salah email atau password":
            statusCode = 400
            errors.push('email atau password anda salah, mohon coba ulang lagi')
            break;
        //movie
        case "SequelizeForeignKeyConstraintError":
            statusCode = 400
            errors.push('Foreign Key nya kosong atau tidak ada')
            break;
        case "Validation min on rating failed":
            statusCode = 400
            errors.push('ratingnya minimal nilainya 1')
            break;
        case "Validation notEmpty on title failed":
            statusCode = 400
            errors.push('title tidak boleh kosong')
            break;
        //genre
        case "Validation notEmpty on name failed":
            statusCode = 400
            errors.push('nama tidak boleh kosong')
            break;
        default:
            statusCode = 500
            errors.push('Internal Server Error')
            break;
    }

    res.status(statusCode).json(errors)
}

module.exports = errorHandle