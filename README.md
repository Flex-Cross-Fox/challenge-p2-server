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
```
    {
        username: 'albert',
        role: 'admin',
        email: 'albert@gmail.com',
        password: '123456'
    }
```
- Success Response

    Code: 200

    Content:
```
{
    "id": 5,
    "username": "kwok",
    "email": "kwok@gmail.com",
    "password": "$2a$10$gOYmqQPIWTqbNGtkcB7EAeWZ5E0SObAyI1hEsDgSFFFlCP8wdKOdC",
    "role": "admin",
    "phoneNumber": "1234567",
    "address": "batam",
    "updatedAt": "2021-09-13T08:06:01.948Z",
    "createdAt": "2021-09-13T08:06:01.948Z"
}
```

- Error Response
```
{
    "errors": [
        "Validation notEmpty on password failed",
        "Validation len on password failed"
    ]
}
```

Login User

    POST

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

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyaXN0b0BnbWFpbC5jb20iLCJpYXQiOjE2MzE1MzkyMjR9.IkV9HvRvXNXHGbkkFxJu6XV-OwG8u0QVD3nl6larNZA"
}
```

- Error Response
```
{
    "errors": "Internal Server Errors"
}
```
- Error Response if password or email wrong
{
    "errors": [
        "email atau password salah"
    ]
}

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

```
[
    {
        "id": 1,
        "name": "guo",
        "createdAt": "2021-09-04T04:20:20.412Z",
        "updatedAt": "2021-09-04T04:20:20.412Z"
    },
    {
        "id": 2,
        "name": "aristo",
        "createdAt": "2021-09-04T04:20:25.719Z",
        "updatedAt": "2021-09-04T04:20:25.719Z"
    }
]
```

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

```
{
    "id": 1,
    "name": "guo",
    "createdAt": "2021-09-04T04:20:20.412Z",
    "updatedAt": "2021-09-04T04:20:20.412Z"
}
```

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
        name: 'test999'
    }

- Success Response

    Code: 200

    Content:
```
{
    "id": 4,
    "name": "test999",
    "updatedAt": "2021-09-13T14:16:08.743Z",
    "createdAt": "2021-09-13T14:16:08.743Z"
}
```

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
```
{
    "msg": "berhasil delete id tersebut"
}
```

- Error Response IF id empty or not available

```
{
    "errors": [
        "id not available"
    ]
}
```

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

```
{
    "msg": "berhasil update data"
}
```

- Error Response IF id empty or not available

```
{
    "errors": [
        "id not available"
    ]
}
```

<!-- - Error Response When web not found

    Code: 404

    Content:

    {"msg": "error not found"} -->