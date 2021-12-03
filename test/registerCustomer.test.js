const { sequelize } = require('../models')
const { queryInterface } = sequelize;
const request = require('supertest');
const app = require('../app')
// const { Encoded } = require('../helpers/jwt')
// let token;
beforeAll((done) => {
    // token = {token: Encoded({email: 'test18@gmail.com'})}
    queryInterface.bulkDelete('Movies',null, {})
    .then(() => {
        return queryInterface.bulkDelete('Genres',null, {})
    })
    .then(() => {
        return queryInterface.bulkDelete('Users',null, {})
    })
    .then(() => {
        return queryInterface.bulkInsert('Users', [
            {id: 1, username: 'test', email: 'test18@gmail.com', password: 'rahasia', role: 'admin', phoneNumber: '123456', address: 'batam', createdAt: new Date, updatedAt: new Date}
        ], )
    })
    .then(() => {
        return queryInterface.bulkInsert('Genres', [
            {id: 1, name: 'test', createdAt: new Date, updatedAt: new Date}
        ], )
    })
    .then(() => {
        return queryInterface.bulkInsert('Movies', [
            {id: 1, title: 'kimino na wa',synopsis: 'nama kamu siapa?', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 2,title: 'a silent voice',synopsis: 'bahasa tubuh', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 3, title: 'weathering with you',synopsis: 'hujan! hujan! hujan!', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 4, title: 'iron man',synopsis: 'manusia bajak', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 5, title: 'iron man 2',synopsis: 'manusia bajak 2', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
    
            {id: 6, title: 'iron man 3',synopsis: 'manusia bajak 3', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 7, title: 'batman',synopsis: 'covid', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 8, title: 'far cry 3',synopsis: 'Vaas', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 9, title: 'WWE 2K18',synopsis: 'stone cold', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 10, title: 'Lost Saga',synopsis: 'banyak cheat', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
    
            {id: 11, title: 'PB',synopsis: 'lebih banyak cheat', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 12, title: 'CSGO',synopsis: 'harus bayar', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 13, title: 'DOTA2',synopsis: 'ASIK', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 14, title: 'LOL',synopsis: 'belum pernah main', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 15, title: 'genshin',synopsis: 'pusing', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
    
            {id: 16, title: 'LEGO',synopsis: 'TOY', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 17, title: 'Naruto shippuden ninja story',synopsis: 'gitu gitu aja', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 18, title: 'Street fight',synopsis: 'bosan', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 19, title: 'contro',synopsis: 'PC gk kuat', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date},
            {id: 20, title: 'Steam',synopsis: 'Epic Games', trailerUrl: 'youtube', imgUrl: 'google', rating: '8',genreId: '1',authorId: '1', status: 'active', createdAt: new Date, updatedAt: new Date}
        ], {})
    })
    .then(() => {
        done()
    })
    .catch(error => done(error))
})

describe('POST /register', function(){
    it('berhasil register: respond with object', function(done){
        let user = {username: 'test', email: 'test12@gmail.com', password: 'rahasia', role: 'admin', phoneNumber: '1234567', address: 'batam'}
        request(app)
            .post('/register')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(201)
                expect(body).toHaveProperty('username', user.username)
                expect(body).toHaveProperty('email', user.email)
                expect(body).toHaveProperty('role', user.role)
                expect(body).toHaveProperty('phoneNumber', user.phoneNumber)
                expect(body).toHaveProperty('address', user.address)
                done()
            })
            .catch(err => done(err))
    })
    it('Email tidak diberikan / tidak diinput', function(done){
        let user = {username: 'test', password: 'rahasia', role: 'admin', phoneNumber: '1234567', address: 'batam'}
        request(app)
            .post('/register')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "User.email cannot be null"
                ])))
                done()
            })
            .catch(err => done(err))
    })
    it('Password tidak diberikan / tidak diinput', function(done){
        let user = {username: 'test', email: 'test12@gmail.com', role: 'admin', phoneNumber: '1234567', address: 'batam'}
        request(app)
            .post('/register')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "User.password cannot be null"
                ])))
                done()
            })
            .catch(err => done(err))
    })
    it('Email diberikan String Kosong', function(done){
        let user = {username: 'test', email: '', password: 'rahasia', role: 'admin', phoneNumber: '1234567', address: 'batam'}
        request(app)
            .post('/register')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "Validation isEmail on email failed",
                    "Validation notEmpty on email failed"
                ])))
                done()
            })
            .catch(err => done(err))
    })
    it('Password diberikan String Kosong', function(done){
        let user = {username: 'test', email: 'test12@gmail.com', password: '', role: 'admin', phoneNumber: '1234567', address: 'batam'}
        request(app)
            .post('/register')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "Validation notEmpty on password failed",
                    "Validation len on password failed"
                ])))
                done()
            })
            .catch(err => done(err))
    })
    it('Email sudah terdaftar', function(done){
        let user = {username: 'test', email: 'test12@gmail.com', password: 'rahasia', role: 'admin', phoneNumber: '1234567', address: 'batam'}
        request(app)
            .post('/register')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "email must be unique"
                ])))
                done()
            })
            .catch(err => done(err))
    })
    it('Format Email salah / invalid', function(done){
        let user = {username: 'test', email: 'test12gmail.com', password: 'rahasia', role: 'admin', phoneNumber: '1234567', address: 'batam'}
        request(app)
            .post('/register')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "Validation isEmail on email failed"
                ])))
                done()
            })
            .catch(err => done(err))
    })
})

describe('POST /login', function(){
    it('berhasil login: respond with object', function(done){
        let user = { email: 'test12@gmail.com', password: 'rahasia' }
        request(app)
            .post('/login')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(200)
                expect(body).toHaveProperty('token', expect.any(String))
                done()
            })
            .catch(err => done(err))
    })
    it('Memberikan Password yang salah', function(done){
        let user = { email: 'test12@gmail.com', password: 'rahasias' }
        request(app)
            .post('/login')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "email atau password salah"
                ])))
                done()
            })
            .catch(err => done(err))
    })
    it('Email yang diinput tidak terdaftar di database', function(done){
        let user = { email: 'test121352@gmail.com', password: 'rahasia' }
        request(app)
            .post('/login')
            .set('Accept', 'application/json')
            .send(user)
            .then((res) => {
                let { status, body} = res
                expect(status).toBe(400)
                expect(body).toHaveProperty('errors', expect.any(Array))
                expect(body.errors).toEqual((expect.arrayContaining([
                    "email atau password salah"
                ])))
                done()
            })
            .catch(err => done(err))
    })
})

describe('GET /movies', function(){
    it('berhasil mendapatkan Entitas utama (baik tanpa atau dengan access_token) tanpa menggunakan query filter parameter', function(done){
        request(app)
        .get('/movies')
        .set('Accept', 'application/json')
        .then((res) => {
            let { status, body} = res
            expect(status).toBe(200)
            expect(body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({title: 'iron man'}),
                    expect.objectContaining({title: 'iron man 2'}),
                    expect.objectContaining({title: 'kimino na wa'}),
                    expect.objectContaining({title: 'a silent voice'})
                ])
            )
            done()
        })
        .catch(err => done(err))
    })

    it('berhasil mendapatkan Entitas utama (baik tanpa atau dengan access_token) dengan menggunakan 1 query filter parameter', function(done){
        request(app)
        .get('/movies?title=iron')
        .set('Accept', 'application/json')
        .then((res) => {
            let { status, body} = res
            expect(status).toBe(200)
            expect(body).toEqual([
                expect.objectContaining({title: 'iron man'}),
                expect.objectContaining({title: 'iron man 2'}),
                expect.objectContaining({title: 'iron man 3'})
            ])
            done()
        })
        .catch(err => done(err))
    })

    it('berhasil mendapatkan Entitas utama (baik tanpa atau dengan access_token) dengan menggunakan 2 query filter parameter', function(done){
        request(app)
        .get('/movies?title=iron&synopsis=manusia')
        .set('Accept', 'application/json')
        .then((res) => {
            let { status, body} = res
            expect(status).toBe(200)
            expect(body).toEqual([
                expect.objectContaining({title: 'iron man'}),
                expect.objectContaining({title: 'iron man 2'}),
                expect.objectContaining({title: 'iron man 3'})
            ])
            done()
        })
        .catch(err => done(err))
    })

    it('berhasil mendapatkan Entitas utama (baik tanpa atau dengan access_token) ketika memberikan page tertentu (cek paginationnya)', function(done){
        request(app)
        .get('/movies?page=2')
        .set('Accept', 'application/json')
        .then((res) => {
            let { status, body} = res
            expect(status).toBe(200)
            expect(body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({title: 'batman'}),
                    expect.objectContaining({title: 'far cry 3'}),
                    expect.objectContaining({title: 'iron man 3'}),
                    expect.objectContaining({title: 'WWE 2K18'}),
                    expect.objectContaining({title: 'Lost Saga'})
                ])
            )
            done()
        })
        .catch(err => done(err))
    })

    it('berhasil mendapatkan 1 Entitas utama sesuai dengan params id yang diberikan', function(done){
        request(app)
        .get('/movies/pag/1')
        .set('Accept', 'application/json')
        .then((res) => {
            let { status, body} = res
            expect(status).toBe(200)
            expect(body).toEqual([
                expect.objectContaining({genreId: 1})
            ])
            done()
        })
        .catch(err => done(err))
    })

    it('gagal mendapatkan Entitas utama karena params id yang diberikan tidak ada di database / invalid', function(done){
        request(app)
        .get('/movies/pag/21')
        .set('Accept', 'application/json')
        .then((res) => {
            let { status, body} = res
            expect(status).toBe(200)
            expect(body).toEqual([])
            done()
        })
        .catch(err => done(err))
    })
})