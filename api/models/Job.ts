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
      required: true,
      description: 'name of a Job'
    },

    description: {
      type: 'string'
    },

    submitDate: {
      type: 'datetime',
      description: 'a date when the Job was submit'
    },

    dueDate: {
      type: 'datetime',
      description: 'a date with a deadline'
    },

    closedDate: {
      type: 'datetime',
      description: 'a date when the Job was closed'
    },

    submitter: {
      type: 'integer',
      description: 'id of the user who did submit the Job'
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
      type: 'string',
      description: 'external project id, as is defined on the external system'
    }

  },

  // custom validation functions
  types: {
    // This is a workaround for having description in the attributes.
    // Otherwise there would be an error.
    description: () => true
  }
};

