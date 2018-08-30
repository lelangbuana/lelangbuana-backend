const request = require('supertest');
const app = require('../app');

describe('GET /users', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/id/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/id/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/:username', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/:username')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/search', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/search')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/checktoken', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/checktoken')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/logout', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/logout')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/register', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/register')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/login', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/login')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/users/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})