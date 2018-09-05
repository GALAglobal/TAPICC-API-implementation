var constants = require('./constants');

function createLocalHostAccount(callback) {
  const defaultLocalHostAcc = {
    hostname: constants.ROOT_USER_HOSTNAME,
    api_key: constants.ROOT_USER_API_KEY
  }
  Account.findOrCreate({ hostname: defaultLocalHostAcc.hostname }, defaultLocalHostAcc)
    .exec((err, recordFound, newRecord) => {
      if (err) console.error(err);
      if (recordFound) console.log('default localhost account already exist.');
      if (newRecord) console.log('created a default localhost account.');
      if (callback) callback();
    });
}

module.exports = {
  createLocalHostAccount
}