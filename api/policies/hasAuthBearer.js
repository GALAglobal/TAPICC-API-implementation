var constants = require('../../constants');

module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller


  console.log('checking if has valid auth bearer');
  let reqApiKey = req.query.api_key || req.get('Authorization');
  if (!reqApiKey) return res.forbidden('Your request must contain api_key.');
  reqApiKey = reqApiKey.replace('Bearer ', '');

  Account.findOne({ api_key: reqApiKey }).exec(function(err, acc) {
    if (acc) {
      return next();
    } else {
      // User is not allowed
      // (default res.forbidden() behavior can be overridden in `config/403.js`)
      return res.forbidden('The provided api_key is not matching with any account.');
    }
  });
  
};
