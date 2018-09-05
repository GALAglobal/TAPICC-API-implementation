var constants = require('../../constants');

module.exports = function(req, res, next) {

  const root_api_key = constants.ROOT_USER_API_KEY;
  
  console.log('checking if is localhost account');
  if (req.query.access_token == root_api_key || req.get('Authorization') == `Bearer ${root_api_key}`) {
    return next();
  }

  return res.forbidden('You are not permitted to perform this action. Only localhost account can do this.');
};
