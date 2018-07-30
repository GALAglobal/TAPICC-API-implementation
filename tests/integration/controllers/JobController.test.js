var request = require('supertest');
var expect = require('expect');

describe('JobController', function() {

  describe('GET /job', function() {
    it('should return all Jobs', function (done) {
      request(sails.hooks.http.app)
        .get('/job')
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual([]);
          done();
        }).catch(err => {
          expect(err).not.toBeDefined()
          done()
        })
    });
  });

});