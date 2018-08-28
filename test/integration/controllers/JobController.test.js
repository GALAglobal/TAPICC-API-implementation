var request = require('supertest');
var expect = require('expect');

describe('JobController', function() {
  beforeEach((done) => {
    sails.once('hook:orm:reloaded', done);
    sails.emit('hook:orm:reload');
  })

  describe('GET /jobs', function() {
    it('should return all Jobs', function (done) {
      request(sails.hooks.http.app)
        .get('/jobs')
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