var request = require('supertest');
var expect = require('expect');
var _ = require('lodash');

describe('TaskController', function () {
  const fixtures = {
    jobs: [{
      id: 1,
      name: 'first job',
      submitter: 'symfonie.com/123'
    }],
    assets: [{
      id: 1,
      jobId: 1
    }],
    tasks: [{
      id: 1,
      assetId: 1,
      progress: 'pending',
      type: 'translation'
    }]
  }
  describe('POST /assets/:parentid/tasks/:id/uploaddeliverable', function () {
    beforeEach(function (done) {
      const cb = () => Job.create(fixtures.jobs[0]).then(() => {
        return Asset.create(fixtures.assets[0])
      }).then(() => {
        return Task.create(fixtures.tasks[0])
      }).then(() => {
        done()
      });

      sails.once('hook:orm:reloaded', cb);
      sails.emit('hook:orm:reload');
    });
    

    it('should upload the deliverable file to an existing Task', function (done) {

      request(sails.hooks.http.app)
        .post('/assets/1/tasks/1/uploaddeliverable')
        .attach('deliverable', 'test/fixtures/testDeliverableFile.txt')
        .expect(200)
        .then((response) => {
          Asset.findOne(fixtures.assets[0].id).populate('tasks').exec(function (err, res) {
            const asset = res.toJSON();
            const expectedTask = _.merge(fixtures.tasks[0], _.pick(asset.tasks[0], ['createdAt', 'updatedAt']));
            expectedTask.fileDescriptor = asset.tasks[0].fileDescriptor;
            expectedTask.fileOriginalName = 'testDeliverableFile.txt';
            expectedTask.progress = 'finished';
            expect(err).toBe(null)
            expect(asset).toEqual({
              id: 1,
              jobId: 1,
              createdAt: asset.createdAt,
              updatedAt: asset.updatedAt,
              tasks: [expectedTask]
            });
            done()
          });
        });
    });

  });

});