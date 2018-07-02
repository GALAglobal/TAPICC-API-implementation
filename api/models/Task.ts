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
      type: 'string'
    },

    assetId: {
      type: 'integer'
    },

    progress: {
      type: 'string',
      enum: ['pending', 'in progress', 'paused', 'canceled', 'finished']
    },

    assignedTo: {
      // user Id
      type: 'integer'
    },

    file: {
      // deliverable
      type: 'binary'
    },

    jobId: {
      model: 'job'
    }
  }
};

