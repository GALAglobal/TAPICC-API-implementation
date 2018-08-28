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

  // job
  'GET /jobs': {
    controller: 'JobController',
    action: 'find',
    swagger: {
      summary: 'List all Jobs',
      description: 'List all Jobs'
    }
  },
  'POST /jobs': {
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

  'DELETE /jobs/:id': {
    controller: 'JobController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Job',
      description: 'Delete a Job'
    }
  },
  'GET /jobs/:id': {
    controller: 'JobController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Job',
      description: 'Get a Job'
    }
  },
  'PUT /jobs/:id': {
    controller: 'JobController',
    action: 'update',
    swagger: {
      summary: 'Update a Job',
      description: 'Update a Job'
    }
  },

  'DELETE /jobs/:parentid/assets/:id': {
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
  'GET /jobs/:parentid/assets/:id': {
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
  'PUT /jobs/:parentid/assets/:id': {
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
  'GET /jobs/:parentid/assets': {
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

  'DELETE /assets/:parentid/tasks/:id': {
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
  'GET /assets/:parentid/tasks/:id': {
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
  'PUT /assets/:parentid/tasks/:id': {
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
  'GET /assets/:parentid/tasks': {
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
  'POST /assets/:parentid/tasks': {
    controller: 'TaskController',
    action: 'create',
    swagger: {
      summary: 'Create a Task',
      description: `Creates a Task which will belong to a specific job.`,
      tags: [
        'Task'
      ]
    }
  },

  'POST /jobs/:parentid/assets/uploadfile':
  {
    controller: 'AssetController',
    action: 'uploadFile',
    swagger: {
      summary: 'Upload an asset file and create an asset',
      description: 'Upload an asset file and create an asset',
      parameters: [
        {
          "name": "parentid",
          "in": "path",
          "required": true,
          "type": "string"
        },
        {
          "name": "sourceLanguage",
          "in": "formData",
          "type": "string"
        },
        {
          "name": "encoding",
          "in": "formData",
          "type": "string"
        },
        {
          "name": "asset",
          "in": "formData",
          "description": "The Asset file",
          "required": true,
          "type": "file"
        },
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
  'GET /jobs/:parentid/assets/:id/downloadfile': {
    controller: 'AssetController',
    action: 'downloadFile',
    swagger: {
      summary: 'Download an asset file',
      description: 'Download an asset file',
      tags: [
        'Asset'
      ],
      responses: {
        200: {
          description: "The asset file",
          schema: {
            type: "file"
          }
        }
      }
    }
  },
    'POST /assets/:parentid/tasks/:id/uploaddeliverable': {
      controller: 'TaskController',
      action: 'uploadFile',
      swagger: {
        summary: 'Upload deliverable file',
        description: 'Upload deliverable file',
        tags: [
          'Task'
        ],
        parameters: [
          {
            "name": "parentid",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "deliverable",
            "in": "formData",
            "description": "The deliverable file",
            "required": true,
            "type": "file"
          },
        ],
        responses: {
          '200': {
            schema: {
              "$ref": "#/definitions/task",
            }
          }
        }
      }
    },
    'GET /assets/:parentid/tasks/:id/downloaddeliverable': {
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
          200: {
            description: "The deliverable file",
            schema: {
              type: "file"
            }
          }
        }
      }
    },

    // task
    'GET /tasks': {
      controller: 'TaskController',
      action: 'find',
      swagger: {
        summary: 'List all Tasks',
        description: 'List all Tasks'
      }
    },

    // asset
    'GET /assets': {
      controller: 'AssetController',
      action: 'find',
      swagger: {
        summary: 'List all Assets',
        description: 'List all Assets'
      }
    },

    // webhook
    'GET /webhooks': {
      controller: 'WebhookController',
      action: 'find',
      swagger: {
        summary: 'List all Webhooks',
        description: 'List all Webhooks'
      }
    },
    'POST /webhooks': {
      controller: 'WebhookController',
      action: 'create',
      swagger: {
        summary: 'Create a Webhook',
        description: 'Create a Webhook'
      }
    },

    'DELETE /webhooks/:id': {
      controller: 'WebhookController',
      action: 'destroy',
      swagger: {
        summary: 'Delete a Webhook',
        description: 'Delete a Webhook'
      }
    },
    'GET /webhooks/:id': {
      controller: 'WebhookController',
      action: 'findOne',
      swagger: {
        summary: 'Get a Webhook',
        description: 'Get a Webhook'
      }
    },
    'PUT /webhooks/:id': {
      controller: 'WebhookController',
      action: 'update',
      swagger: {
        summary: 'Update a Webhook',
        description: 'Update a Webhook'
      }
    }


  };
