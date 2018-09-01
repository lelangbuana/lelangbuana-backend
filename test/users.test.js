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

describe('GET /users/id/:user_id', function () {
    it('Respond with object users data by id', function () {
        return request(app)
            .get('/users/id/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/:username', function () {
    it('Respond with object users data by username', function () {
        return request(app)
            .get('/users/guntur')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /users/search', function () {
    it('Respond with object users data with search', function () {
        return request(app)
            .get('/users/search?q=guntur')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

// describe('GET /users/checktoken', function () {
//     it('Respond with object users data', function () {
//         return request(app)
//             .get('/users/checktoken')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//     })
// })

describe('GET /users/logout', function () {
    it('Respond with object users data by logout', function () {
        return request(app)
            .get('/users/logout')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

// describe('POST /users/register', function () {
//     it('Respond with object users data', function () {
//         return request(app)
//             .post('/users/register')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//     })
// })

// describe('POST /users/login', function () {
//     it('Respond with object users data', function () {
//         return request(app)
//             .post('/users/login')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//     })
// })

// describe('PUT /users/:user_id', function () {
//     it('Respond with object users data by id', function () {
//         return request(app)
//             .put('/users/4')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//     })
// })

// describe('DELETE /users/:user_id', function () {
//     it('Respond with object users data', function () {
//         return request(app)
//             .delete('/users/4')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//     })
// })