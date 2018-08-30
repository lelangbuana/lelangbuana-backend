const request = require('supertest');
const app = require('../app');

describe('GET /', function () {
    it('Respond: Welcome to REST API', function () {
        return request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual('Welcome to REST API');
            })
    })
})