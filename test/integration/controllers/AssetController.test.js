var request = require('supertest');
var expect = require('expect');
var _ = require('lodash');

describe('AssetController', function () {

  describe('POST /job/:parentid/asset/uploadfile', function () {
    beforeEach(function (done) {
      Job.create({
        id: 1,
        name: 'first job',
        submitter: 'symfonie.com/123'
      }).exec((err, res) => {
        if (err) console.error(err);
        done();
      });
    });

    it('should handle file upload and asset creation', function (done) {
      request(sails.hooks.http.app)
        .post('/job/1/asset/uploadfile')
        .field('sourceLanguage', 'en')
        .field('encoding', 'utf8')
        .attach('asset', 'test/fixtures/testAssetFile.txt')
        .expect(200)
        .then((response) => {
          expect(_.omit(response.body, ['updatedAt', 'createdAt'])).toEqual({
            id: 1,
            jobId: 1,
            sourceLanguage: 'en',
            encoding: 'utf8',
            fileDescriptor: response.body.fileDescriptor,
            fileOriginalName: 'testAssetFile.txt'
          });

          Job.findOne(1).populate('assets').exec(function (err, res) {
            expect(err).toBe(null)
            expect(_.omit(res.toJSON(), ['createdAt', 'updatedAt'])).toEqual({
              id: 1,
              name: 'first job',
              submitter: 'symfonie.com/123',
              assets: [response.body]
            });
            done()
          });
        }).catch(err => {
          expect(err).not.toBeDefined()
          done()
        });
    });

  });

});