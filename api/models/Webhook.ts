/**
 * Webhook.js
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
      description: 'name of the Webhook'
    },

    description: {
      type: 'string'
    },

    url: {
      type: 'string',
      description: 'url which the server will make a request to when an event occurs',
      required: true
    },

    eventType: {
      type: 'string',
      enum: [
        'taskCreated',
        'taskUpdated',
        'taskDeleted',
        'jobCreated',
        'jobUpdated',
        'jobDeleted',
        'assetCreated',
        'assetUpdated',
        'assetDeleted'
      ],
      description: 'type of event - if this event occurs, then the "url" will be requested by the TAPICC server',
      required: true
    }
  },

  // custom validation functions
  types: {
    // This is a workaround for having description in the attributes.
    // Otherwise there would be an error.
    description: () => true
  }
};

