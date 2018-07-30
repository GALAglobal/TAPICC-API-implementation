/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

export = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      description: '(auto-generated)'
    },

    type: {
      type: 'string',
      enum: ['translation', 'machine translation', 'modification', 'proof'],
      required: true
    },

    targetLanguage: {
      type: 'string',
      description: 'language code of the target'
    },

    progress: {
      type: 'string',
      enum: ['pending', 'in progress', 'paused', 'canceled', 'finished']
    },

    assignedTo: {
      type: 'string',
      description: '"server name / id" of the user who it is assigned to',
      example: 'symfonie.com/43920149320'
    },

    file: {
      type: 'binary',
      description: 'an actual file (deliverable)'
    },

    jobId: {
      model: 'job'
    },

    assetId: {
      model: 'asset'
    }
  },

  // custom validation functions
  types: {
    // This is a workaround for having description in the attributes.
    // Otherwise there would be an error.
    description: () => true
  }
};

