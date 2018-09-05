/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hostname: {
      type: 'string',
      required: true
    },

    api_key: {
      type: 'string',
      defaultsTo: function() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      }
    },

    organisation: {
      type: 'string'
    }

  }
};

