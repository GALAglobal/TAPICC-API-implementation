/**
 * Asset.js
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

    fileDescriptor: {
      type: 'string',
      description: 'unique name of the file. (auto-generated)'
    },

    fileOriginalName: {
      type: 'string',
      description: 'original name of the file as uploaded. (auto-filled)'
    },

    isReference: {
      type: 'boolean',
      description: 'if is set to true, then the Asset is not suppossed to be actionable.'
    },

    sourceLanguage: {
      type: 'string',
      description: 'language code of the source'
    },

    encoding: {
      type: 'string',
      description: 'encoding code'
    },

    jobId: {
      model: 'job'
    },

    tasks: {
      collection: 'task',
      via: 'assetId'
    }
  },

  // custom validation functions
  types: {
    // This is a workaround for having description in the attributes.
    // Otherwise there would be an error.
    description: () => true
  }
};

