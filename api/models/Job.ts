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
      type: 'string',
      required: true
    },

    description: {
      type: 'string'
    },

    submitDate: {
      type: 'datetime'
    },

    dueDate: {
      type: 'datetime'
    },

    closedDate: {
      type: 'datetime'
    },

    submitter: {
      type: 'integer'
    },

    assets: {
      collection: 'asset',
      via: 'jobId'
    },

    tasks: {
      collection: 'task',
      via: 'jobId'
    },

    externalId: {
      type: 'string'
    }

  }
};

