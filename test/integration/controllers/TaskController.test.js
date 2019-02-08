var request = require('supertest');
var expect = require('expect');
var _ = require('lodash');
var constants = require('../../../constants');
var createLocalHostAccount = require('../../../functions').createLocalHostAccount;

describe('TaskController', function () {
  const fixtures = {
    jobs: [{
      id: 1,
      name: 'first job',
      submitter: 'symfonie.com/123'
    }],
    inputs: [{
      id: 1,
      jobId: 1
    }],
    tasks: [{
      id: 1,
      jobId: 1,
      inputId: 1,
      progress: 'pending',
      type: 'translation'
    }]
  }
  describe('POST /tasks/:id/uploaddeliverable', function () {
    beforeEach(function (done) {
      const cb = () => Job.create(fixtures.jobs[0]).then(() => {
        return Input.create(fixtures.inputs[0])
      }).then(() => {
        return Task.create(fixtures.tasks[0])
      }).then(() => {
        createLocalHostAccount(done);
      });

      sails.once('hook:orm:reloaded', cb);
      sails.emit('hook:orm:reload');
    });
    

    it('should upload the deliverable file to an existing Task', function (done) {

      request(sails.hooks.http.app)
        .post('/tasks/1/uploaddeliverable')
        .set('Authorization', 'Bearer ' + constants.ROOT_USER_API_KEY)
        .attach('deliverable', 'test/fixtures/testDeliverableFile.txt')
        .expect(200)
        .then((response) => {
          Input.findOne(fixtures.inputs[0].id).populate('tasks').exec(function (err, res) {
            const input = res.toJSON();
            const expectedTask = _.merge(fixtures.tasks[0], _.pick(input.tasks[0], ['createdAt', 'updatedAt']));
            expectedTask.fileDescriptor = input.tasks[0].fileDescriptor;
            expectedTask.fileOriginalName = 'testDeliverableFile.txt';
            expectedTask.progress = 'finished';
            expect(err).toBe(null)
            expect(input).toEqual({
              id: 1,
              jobId: 1,
              createdAt: input.createdAt,
              updatedAt: input.updatedAt,
              tasks: [expectedTask]
            });
            done()
          });
        });
    });

  });

});