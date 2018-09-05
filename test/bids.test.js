const request = require('supertest');
const app = require('../app');

describe('GET /bids', function () {
    it('Respond with object bids data', function () {
        return request(app)
            .get('/bids')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /bids/:bid_id', function () {
    it('Respond with object bids data by bid_id', function () {
        return request(app)
            .get('/bids/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /bids/user_id/:user_id', function () {
    it('Respond with object bids data by user_id', function () {
        return request(app)
            .get('/bids/user_id/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /bids/auction_id/:auction_id', function () {
    it('Respond with object bids data by auction_id', function () {
        return request(app)
            .get('/bids/auction_id/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

// describe('POST /bids', function () {
//     it('Respond with object bids data', function() {
//         return request(app)
//         .post('/')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//     })
// })

// describe('PUT /bids/:bid_id', function () {
//     it('Respond with object bids data by bid_id', function() {
//         return request(app)
//         .put('/bids/1')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//     })
// })

// describe('DELETE /bids/:bid_id', function () {
//     it('Respond with object bids data by bid_id', function() {
//         return request(app)
//         .delete('/bids/1')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//     })
// })