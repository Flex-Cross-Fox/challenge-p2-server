# challenge-p2-server

**Movie-App**

Base URL
http://localhost:3000
**Movies**
Add

    Add new Movie and Return movie we just add
- URL
    
    http://localhost:3000/movies
- Method

    POST

- URL Params

    None

- Data Params

    http://localhost:3000/movies?title=' '&synopsis=' '&trailerUrl=' '&imgUrl=' '&rating=' '&genreId=' '&authorId=' '

    Required:
    
    { 
        
    title: req.body.title, 
    
    synopsis: req.body.synopsis, 
    
    trailerUrl: req.body.trailerUrl, 
    
    imgUrl: req.body.imgUrl, 
    
    rating: req.body.rating, 
    
    genreId: req.body.genreId, 
    
    authorId: req.body.authorId
    
    }

- Success Response

    Code: 201

    Content:

    {

    "id": 4,
    
    "title": "Title Movie",

    "synopsis": "synopsis Movie",
    
    "trailerUrl": "link atau URL trailer Movie",
    
    "imgUrl": "link Poster Movie",
    
    "rating": nilai movie dengan angka,
    
    "genreId": id Genre,
    
    "authorId": id Author,
    
    "updatedAt": "waktu Update data tersebut",
    
    "createdAt": "waktu membuat data tersebut"

    }

- Error Response

    Code: 500

    Content:

    {name: "SequelizeDatabaseError"}

- Error Response When Foreign Key Error
    
    SequelizeForeignKeyConstraintError

- Error Response When Rating Failed

    Validation min on rating failed

- Error Response When Title Empty Or Failed

    Validation notEmpty on title failed

Display All Movie

    Return All movie with array of object
- URL
    
    http://localhost:3000/movies
- Method

    GET

- URL Params

    None

- Data Params

    None

- Success Response

    Code: 200

    Content:

[

    {
        "id": 4,
        "title": "marvel",
        "synopsis": "cerita hero selamat kan dunia, tapi hanya di AS",
        "trailerUrl": "cari di youtube",
        "imgUrl": "cari di google",
        "rating": 8,
        "genreId": 2,
        "authorId": 1,
        "createdAt": "2021-08-18T04:08:41.330Z",
        "updatedAt": "2021-08-18T04:08:41.330Z"
    }
]

- Error Response

    Code: 500

    None

Display by id

    Return Movie with object by params id
- URL

    http://localhost:3000/movies/:id
- Method

    GET

- URL Params

    None

- Data Params
    
    None

- Success Response

    Code: 200

    Content:

    {

    "id": 4,
    
    "title": "Title Movie",

    "synopsis": "synopsis Movie",
    
    "trailerUrl": "link atau URL trailer Movie",
    
    "imgUrl": "link Poster Movie",
    
    "rating": nilai movie dengan angka,
    
    "genreId": id Genre,
    
    "authorId": id Author,
    
    "updatedAt": "waktu Update data tersebut",
    
    "createdAt": "waktu membuat data tersebut"

    }

- Error Response

    Code: 500

    Content:

    null
    
- Error Response When Id Not Available

    id not available

Change all data by id

    Change all movie data by id
- URL
    
    http://localhost:3000/movies/:id
- Method

    PUT

- URL Params

    None

- Data Params
    
    {

    "id": 4,
    
    "title": "Title Movie",

    "synopsis": "synopsis Movie",
    
    "trailerUrl": "link atau URL trailer Movie",
    
    "imgUrl": "link Poster Movie",
    
    "rating": nilai movie dengan angka,
    
    "genreId": id Genre,
    
    "authorId": id Author

    }

- Success Response

    Code: 200

    Content:

    [

        1,
        
        [
            {
                "id": 4,
                "title": "hasil",
                "synopsis": "hasil",
                "trailerUrl": "hasil",
                "imgUrl": "hasil",
                "rating": 9,
                "genreId": 1,
                "authorId": 2,
                "createdAt": "2021-08-18T04:08:41.330Z",
                "updatedAt": "2021-08-18T05:05:56.936Z"
            }
        ]
    ]


- Error Response

    None

- Error Response When Id Not Available

    id not available

- Error Response When Validation NotEmpty On Title Failed

    Validation notEmpty on title failed

- Error Response When Validation Min On Rating Failed

    Validation min on rating failed

Delete Movie

    Delete Movie By Id

- URL
    
    http://localhost:3000/movies/:id
- Method

    DELETE

- URL Params

    None

- Data Params

    None

- Success Response

    Code: 200

    Content:

    {message: 'todo success to delete'}

- Error Response

    {message: 'error'}

- Error Response When Id Not Found

    id not available

Patch Movie

    Patch or Inactive Movie By Id

- URL
    
    http://localhost:3000/movies/:id

- Method

    PATCH

- URL Params

    None

- Data Params

    None

- Success Response

    Code: 200

    Content:

    data

- Error Response

    {name: ''}

**USER**

Register User

    POST User

- URL
    
    http://localhost:3000/register

- Method

    POST

- URL Params

    None

- Data Params

    {
        username: 'albert',
        role: 'admin',
        email: 'albert@gmail.com',
        password: '123456',
        phoneNumber: '08111234567',
        address: 'batam'
    }

- Success Response

    Code: 200

    Content:

    data

- Error Response

    {name: ''}

- Error Response if role failed

{name: 'Validation isIn on role failed'}

- Error Response if password failed

{name: 'Validation len on password failed'}

- Error Response if email failed or not unique

{name: 'email must be unique'}

Login User

    POST User

- URL
    
    http://localhost:3000/login

- Method

    POST

- URL Params

    None

- Data Params

    {
        email: 'albert@gmail.com',
        password: '123456'
    }

- Success Response

    Code: 200

    Content:

    data

- Error Response

    {name: ''}

- Error Response if password or email wrong

    {msg: 'salah email atau password'}

Login user with google

    POST User

- URL
    
    http://localhost:3000/google-login

- Method

    POST

- URL Params

    None

- Data Params

    None

- Success Response

    Code: 200

    Content:

    data

- Error Response

    None

**Genres**

Genres DISPLAY ALL

- URL
    
    http://localhost:3000/genres

- Method

    GET

- URL Params

    None

- Data Params

    None

- Success Response

    Code: 200

    Content:

    data

- Error Response

    None

Genres DISPLAY BY ID

- URL
    
    http://localhost:3000/genres/ id

- Method

    GET

- URL Params

    None

- Data Params

    None

- Success Response

    Code: 200

    Content:

    data

- Error Response

    None

- Error Response IF id not available

    id not available

Add Genres

- URL
    
    http://localhost:3000/genres

- Method

    POST

- URL Params

    None

- Data Params

    {
        name: 'aristo'
    }

- Success Response

    Code: 200

    Content:

    data

- Error Response

    None

- Error Response IF name empty

    Validation notEmpty on name failed

DELETE Genres

- URL
    
    http://localhost:3000/genres/ id

- Method

    DELETE

- URL Params

    None

- Data Params

    None

- Success Response

    Code: 200

    Content:

    {msg: 'berhasil delete id tersebut'}

- Error Response IF id empty or not available

    id not available

PUT Genres

- URL
    
    http://localhost:3000/genres/ id

- Method

    PUT

- URL Params

    None

- Data Params

    {
        name: 'albert'
    }

- Success Response

    Code: 200

    Content:

    {msg: 'berhasil update data'}

- Error Response IF id empty or not available

    id not available

<!-- - Error Response When web not found

    Code: 404

    Content:

    {"msg": "error not found"} -->