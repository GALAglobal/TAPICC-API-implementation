require('ts-node/register');
var Sails = require('sails').constructor;
var fs = require('fs');

var mySailsApp = new Sails();
mySailsApp.lift({
  port: 1338
  // Optionally pass in any other programmatic config overrides you like here.
}, function(err) {
  if (err) {
    console.error('Failed to lift app.  Details:', err);
    return;
  }

  console.log('generating swagger.json file...')
  console.time('generateSwagger');
  fs.writeFileSync('swagger.json', JSON.stringify(sails.hooks.swagger.doc, null, 2));
  console.timeEnd('generateSwagger');
  sails.lower();
})