# challenge-p2-server

**Movie-App**

Base URL
http://localhost:3000

Add

    Add new Movie and Return movie we just add
- URL
    
    http://localhost:3000/movie
- Method

    POST

- URL Params

    None

- Data Params

    http://localhost:3000/movie?title=' '&synopsis=' '&trailerUrl=' '&imgUrl=' '&rating=' '&genreId=' '&authorId=' '

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

Display All Movie

    Return All movie with array of object
- URL
    
    http://localhost:3000/movie
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

    http://localhost:3000/movie/:id
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

Change all data by id

    Change all movie data by id
- URL
    
    http://localhost:3000/movie/:id
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

Delete Movie

    Delete Movie By Id
- URL
    
    http://localhost:3000/movie/:id
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

- Error Response When web not found

    Code: 404

    Content:

    {"msg": "error not found"}