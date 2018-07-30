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
      primaryKey: true,
      description: '(auto-generated)'
    },

    name: {
      type: 'string',
      description: 'name of a Job'
    },

    description: {
      type: 'string'
    },

    submitDate: {
      type: 'datetime',
      description: 'a date when the Job was submit (auto-generated)'
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
      type: 'string',
      description: '"server name / id" of the user who did submit the Job',
      required: true,
      example: 'symfonie.com/43920149320'
    },

    assets: {
      collection: 'asset',
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
    description: () => true,
    example: () => true
  }
};

