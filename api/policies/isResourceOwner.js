var constants = require('../../constants');

module.exports = function(req, res, next) {

  const root_api_key = constants.ROOT_USER_API_KEY;
  
  console.log('checking if is resource owner');
  Account.findOne({ token: req.query.access_token || req.get('Authorization').replace('Bearer ', '') })
  .then((account) => {
    if (!account) { return res.serverError('Auth error: No account found with this token.') }
    if (account.token == root_api_key) return next();
    return Job.findOne({ ownerId: account.id, id: req.param('id') });
  })
  .then((job) => {
    if (job) return next();
  })
  .catch((err) => {
    return res.forbidden('You are not permitted to perform this action. Only localhost account can do this.');
  })
  
  

};
