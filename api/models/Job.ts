/**
 * Job.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },

    name: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    dueAt: {
      type: 'datetime'
    },

    closedAt: {
      type: 'datetime'
    },

    submitter: {
      type: 'string',
      required: true
    },

    inputs: {
      collection: 'input',
      via: 'jobId'
    },

    externalId: {
      type: 'string'
    }

  },

};

