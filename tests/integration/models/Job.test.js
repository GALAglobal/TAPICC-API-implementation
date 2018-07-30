describe('JobModel', function () {

  describe('#find()', function () {
    it('should check find function', function (done) {
      Job.find()
        .then(function (results) {
          // some tests
          done();
        })
        .catch(done);
    });
  });

});