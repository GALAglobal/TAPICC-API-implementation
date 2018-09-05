var request = require('supertest');
var expect = require('expect');
var constants = require('../../../constants');
var createLocalHostAccount = require('../../../functions').createLocalHostAccount;

describe('JobController', function() {
  beforeEach((done) => {
    sails.once('hook:orm:reloaded', () => {
      createLocalHostAccount(done);
    });
    sails.emit('hook:orm:reload');
  })

  describe('GET /jobs', function() {
    it('should return all Jobs', function (done) {
      request(sails.hooks.http.app)
        .get('/jobs')
        .set('Authorization', 'Bearer ' + constants.ROOT_USER_API_KEY)
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