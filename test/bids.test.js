const request = require('supertest');
const app = require('../app');

describe('GET /bids', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/bids')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /bids/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/bids/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /bids/user_id/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/bids/user_id/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /bids/auction_id/:id', function () {
    it('Respond with object users data', function () {
        return request(app)
            .get('/bids/auction_id/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})