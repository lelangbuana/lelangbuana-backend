const request = require('supertest');
const app = require('../app');

describe('GET /auctions', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/auctions')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /auctions/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/auctions/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /auctions/user_id/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/auctions/user_id/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /auctions/status/:status', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/auctions/status/:status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})