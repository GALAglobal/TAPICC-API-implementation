/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/



  // job
  'GET /job': {
    controller: 'JobController',
    action: 'find',
    swagger: {
      summary: 'List all Jobs',
      description: 'List all Jobs'
    }
  },
  'POST /job': {
    controller: 'JobController',
    action: 'create',
    swagger: {
      summary: 'Create a Job',
      description: 'Create a Job',
      schema: {
        $ref: "#/definitions/job"
      }
    }
  },

  'DELETE /job/:id': {
    controller: 'JobController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Job',
      description: 'Delete a Job'
    }
  },
  'GET /job/:id': {
    controller: 'JobController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Job',
      description: 'Get a Job'
    }
  },
  'PUT /job/:id': {
    controller: 'JobController',
    action: 'update',
    swagger: {
      summary: 'Update a Job',
      description: 'Update a Job'
    }
  },

  'POST /job/:id/submit':
    {
      controller: 'JobController',
      action: 'create',
      swagger: {
        summary: 'Submit a Job',
        description: 'Submit a Job, optionally with assets and tasks'
      }
    },

  'DELETE /job/:parentid/asset/:id': {
    controller: 'AssetController',
    action: 'destroy',
    swagger: {
      summary: 'Delete an Asset',
      description: 'Delete an Asset which belongs to a specific job',
      tags: [
        'Asset'
      ]
    }
  },
  'GET /job/:parentid/asset/:id': {
    controller: 'AssetController',
    action: 'findOne',
    swagger: {
      summary: 'Get an Asset',
      description: 'Get an Asset which belongs to a specific job',
      tags: [
        'Asset'
      ],
      responses: {
        200: {
          description: "The requested resource",
          schema: {
            $ref: "#/definitions/asset"
          }
        }
      }
    }
  },
  'PUT /job/:parentid/asset/:id': {
    controller: 'AssetController',
    action: 'update',
    swagger: {
      summary: 'Update an Asset',
      description: 'Update an Asset which belongs to a specific job',
      tags: [
        'Asset'
      ],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          type: 'string'
        },
        {
          name: 'parentid',
          in: 'path',
          required: true,
          type: 'string'
        }
      ]
    }
  },
  'GET /job/:parentid/asset': {
    controller: 'AssetController',
    action: 'find',
    swagger: {
      summary: 'List all Assets',
      description: 'List all Assets which belongs to a specific job',
      tags: [
        'Asset'
      ],
      responses: {
        200: {
          description: "The requested resource",
          schema: {
            $ref: "#/definitions/asset"
          }
        }
      }
    }
  },
  'POST /job/:parentid/asset': {
    controller: 'AssetController',
    action: 'create',
    swagger: {
      summary: 'Create an Assets',
      description: 'Create an Assets which will belong to a specific job',
      tags: [
        'Asset'
      ]
    }
  },

  'DELETE /asset/:parentid/task/:id': {
    controller: 'TaskController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Task',
      description: 'Deletes a Task which belongs to a specific job',
      tags: [
        'Task'
      ]
    }
  },
  'GET /asset/:parentid/task/:id': {
    controller: 'TaskController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Task',
      description: 'Gets a Task which belongs to a specific job',
      tags: [
        'Task'
      ]
    }
  },
  'PUT /asset/:parentid/task/:id': {
    controller: 'TaskController',
    action: 'update',
    swagger: {
      summary: 'Update a Task',
      description: 'Updates a Task which belongs to a specific job',
      tags: [
        'Task'
      ]
    }
  },
  'GET /asset/:parentid/task': {
    controller: 'TaskController',
    action: 'find',
    swagger: {
      summary: 'List all Task',
      description: 'Lists all Task which belong to a specific job',
      tags: [
        'Task'
      ]
    }
  },
  'POST /asset/:parentid/task': {
    controller: 'TaskController',
    action: 'create',
    swagger: {
      summary: 'Create a Task',
      description: `Creates a Task which will belong to a specific job.
      Task can have these statuses:

      pending - the Task has been created, and it's pending to be reviewed and assigned to someone.

      in progress - the Task has been assigned to someone and is being worked on.

      paused - the Task went from in progress, to paused, because something is blocking the Task, or the assignee has other priorities.

      canceled - someone did cancel this Task.

      finished - the work on this Task is done and deliverableLocation is filled with a path to deliverable.
      `,
      tags: [
        'Task'
      ]
    }
  },

  // todo -> make file upload and download work
  'POST /job/:parentid/asset/uploadfile': // todo -> this endpoint also creates an asset
    {
      controller: 'AssetController',
      action: 'uploadFile',
      swagger: {
        summary: 'Upload an asset file and create an asset',
        description: 'Upload an asset file and create an asset',
        tags: [
          'Asset'
        ],
        responses: {
          '200': {
            schema: {
              "$ref": "#/definitions/asset",
            }
          }
        }
      }
    },
  'GET /job/:parentid/asset/:id/downloadfile': {
    controller: 'AssetController',
    action: 'downloadFile',
    swagger: {
      summary: 'Download an asset file',
      description: 'Download an asset file',
      tags: [
        'Asset'
      ],
      responses: {
        '200': {
          schema: {
            "$ref": "",
            type: 'file'
          }
        }
      }
    }
  },
  'POST /asset/:parentid/task/:id/uploaddeliverable': {
    controller: 'TaskController',
    action: 'uploadFile',
    swagger: {
      summary: 'Upload deliverable file',
      description: 'Upload deliverable file',
      tags: [
        'Task'
      ],
      responses: {
        '200': {
          schema: {
            "$ref": ""
          }
        }
      }
    }
  },
  'GET /asset/:parentid/task/:id/downloaddeliverable': {
    controller: 'TaskController',
    action: 'downloadFile',
    swagger: {
      summary: 'Download deliverable file',
      description: 'Download deliverable file',
      produces: [
        'application/json'
      ],
      tags: [
        'Task'
      ],
      responses: {
        '200': {
          description: 'Deliverable file',
          schema: {
            "$ref": "",
            type: 'file'
          },
          content: {
            'application/json': {
              schema: {
                type: 'file'
              }
            }
          }
        }
      }

    }
  },

  // task
  'GET /task': {
    controller: 'TaskController',
    action: 'find',
    swagger: {
      summary: 'List all Tasks',
      description: 'List all Tasks'
    }
  },

  // asset
  'GET /asset': {
    controller: 'AssetController',
    action: 'find',
    swagger: {
      summary: 'List all Assets',
      description: 'List all Assets'
    }
  },

  // webhook
  'GET /webhook': {
    controller: 'WebhookController',
    action: 'find',
    swagger: {
      summary: 'List all Webhooks',
      description: 'List all Webhooks'
    }
  },
  'POST /webhook': {
    controller: 'WebhookController',
    action: 'create',
    swagger: {
      summary: 'Create a Webhook',
      description: 'Create a Webhook'
    }
  },

  'DELETE /webhook/:id': {
    controller: 'WebhookController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Webhook',
      description: 'Delete a Webhook'
    }
  },
  'GET /webhook/:id': {
    controller: 'WebhookController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Webhook',
      description: 'Get a Webhook'
    }
  },
  'PUT /webhook/:id': {
    controller: 'WebhookController',
    action: 'update',
    swagger: {
      summary: 'Update a Webhook',
      description: 'Update a Webhook'
    }
  }


};
