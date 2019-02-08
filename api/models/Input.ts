/**
 * Input.js
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

    fileDescriptor: {
      type: 'string'
    },

    fileOriginalName: {
      type: 'string'
    },

    isReference: {
      type: 'boolean'
    },

    languageCode: {
      type: 'string'
    },

    encoding: {
      type: 'string'
    },

    jobId: {
      model: 'job'
    },

    tasks: {
      collection: 'task',
      via: 'inputs',
      dominant: true
    }
  },

  // custom validation functions
  types: {
    // This is a workaround for having description in the attributes.
    // Otherwise there would be an error.
    description: () => true
  }
};

