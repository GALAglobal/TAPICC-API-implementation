var sails = require('sails');
var constants = require('../constants');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  sails.lift({
      port: 1339,
      environment: 'test',
      connections: {
        testDB: {
          adapter: 'sails-memory'
        }
      },
      models: {
        connection: 'testDB'
      },
      hooks: {
        grunt: false
      },
      log: {
        level: 'error'
      }
  }, function(err) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});