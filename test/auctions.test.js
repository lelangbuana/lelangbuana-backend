const request = require('supertest');
const app = require('../app');

describe('GET /auctions', function () {
    it('Respond with object auctions data', function () {
        return request(app)
            .get('/auctions')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /auctions/:auction_id', function () {
    it('Respond with object auctions data by auction_id', function () {
        return request(app)
            .get('/auctions/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /auctions/user_id/:user_id', function () {
    it('Respond with object auctions data by user_id', function () {
        return request(app)
            .get('/auctions/user_id/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('GET /auctions/status/:status', function () {
    it('Respond with object auctions data by status', function () {
        return request(app)
            .get('/auctions/status/ongoing')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

// describe('POST /auctions', function () {
//     it('Respond with object auctions data', function() {
//         return request(app)
//         .post('/auctions')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//     })
// })

// describe('PUT /auctions/:auction_id', function () {
//     it('Respond with object auctions data by auction_id', function() {
//         return request(app)
//         .put('/auctions/1')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//     })
// })

// describe('DELETE /auctions/:auction_id', function () {
//     it('Respond with object auctions data by auction_id', function() {
//         return request(app)
//         .delete('/auctions/1')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//     })
// })