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
      enum: [
        'Translation',
        'Localization',
        'Literary editing',
        'Technical editing',
        'Proofreading',
        'Reconciliation',
        'Review',
        'Review with LQA',
        'Terminology extraction',
        'Linguistic verification',
        'Technical verification',
        'MT post-editing',
        'Light MT post-editing',
        'Creating voice over script from audio/video',
        'Retyping handwritten text',
        'Copywriting',
        'Copyediting',
        'Technical writing',
        'Adaptation'
      ],
      required: true
    },

    targetLanguage: {
      type: 'string'
    },

    status: {
      type: 'string',
      enum: ['pending', 'in progress', 'paused', 'canceled', 'completed', 'completed-with-warning', 'failed'],
      defaultsTo: 'pending'
    },

    assignedTo: {
      type: 'string'
    },

    fileDescriptor: {
      type: 'string'
    },

    fileOriginalName: {
      type: 'string'
    },

    jobId: {
      model: 'job',
      required: true
    },

    inputs: {
      model: 'input',
      via: 'tasks'
    }
  }

};

