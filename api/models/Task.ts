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
      enum: ['pending', 'in progress', 'paused', 'canceled', 'finished'],
      defaultsTo: 'pending',
      description: `pending - the Task has been created, and it's pending to be reviewed and assigned to someone.

in progress - the Task has been assigned to someone and is being worked on.

paused - the Task went from in progress, to paused, because something is blocking the Task, or the assignee has other priorities.

canceled - someone did cancel this Task.

finished - the work on this Task is done and deliverableLocation is filled with a path to deliverable.`
    },

    assignedTo: {
      type: 'string',
      description: '"server name / id" of the user who it is assigned to',
      example: 'symfonie.com/43920149320'
    },

    fileDescriptor: {
      type: 'string',
      description: 'unique name of the file. (auto-generated)'
    },

    fileOriginalName: {
      type: 'string',
      description: 'original name of the file as uploaded. (auto-filled)'
    },

    jobId: {
      model: 'job',
      required: true
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

