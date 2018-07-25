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
      primaryKey: true
    },

    type: {
      type: 'string',
      enum: ['translation', 'machine translation', 'modification', 'proof']
    },

    targetLanguage: {
      type: 'string',
      description: 'language code of the target'
    },

    assetId: {
      type: 'integer'
    },

    progress: {
      type: 'string',
      enum: ['pending', 'in progress', 'paused', 'canceled', 'finished']
    },

    assignedTo: {
      type: 'integer',
      description: 'id of the user who it is assigned to'
    },

    file: {
      type: 'binary',
      description: 'an actual file (deliverable)'
    },

    jobId: {
      model: 'job'
    }
  },

  // custom validation functions
  types: {
    // This is a workaround for having description in the attributes.
    // Otherwise there would be an error.
    description: () => true
  }
};

