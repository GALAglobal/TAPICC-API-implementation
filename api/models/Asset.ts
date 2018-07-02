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
      primaryKey: true
    },

    file: {
      type: 'binary'
    },

    isReference: {
      type: 'boolean'
    },

    sourceLanguage: {
      type: 'string'
    },

    encoding: {
      type: 'string'
    },

    jobId: {
      model: 'job'
    }
  }
};

