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

  'GET /': {
    controller: 'IndexController',
    action: 'index'
  },

  'GET /accounts': {
    controller: 'AccountController',
    action: 'find'
  },

  'POST /accounts': {
    controller: 'AccountController',
    action: 'create'
  },

  'PUT /accounts/:id': {
    controller: 'AccountController',
    action: 'update'
  },

  'DELETE /accounts/:id': {
    controller: 'AccountController',
    action: 'destroy'
  },

  // job
  'GET /jobs': {
    controller: 'JobController',
    action: 'find'
  },
  'POST /jobs': {
    controller: 'JobController',
    action: 'create'
  },

  'DELETE /jobs/:id': {
    controller: 'JobController',
    action: 'destroy'
  },
  'GET /jobs/:id': {
    controller: 'JobController',
    action: 'findOne'
  },
  'PUT /jobs/:id': {
    controller: 'JobController',
    action: 'update'
  },

  'DELETE /jobs/:parentid/assets/:id': {
    controller: 'AssetController',
    action: 'destroy'
  },
  'GET /jobs/:parentid/assets/:id': {
    controller: 'AssetController',
    action: 'findOne'
  },
  'PUT /jobs/:parentid/assets/:id': {
    controller: 'AssetController',
    action: 'update'
  },
  'GET /jobs/:parentid/assets': {
    controller: 'AssetController',
    action: 'find'
  },

  'POST /jobs/:parentid/assets/uploadfile':
  {
    controller: 'AssetController',
    action: 'uploadFile'
  },
  'GET /jobs/:parentid/assets/:id/downloadfile': {
    controller: 'AssetController',
    action: 'downloadFile'
  },


  // task
  'POST /tasks': {
    controller: 'TaskController',
    action: 'create'
  },
  'GET /tasks': {
    controller: 'TaskController',
    action: 'find'
  },
  'GET /tasks/:id': {
    controller: 'TaskController',
    action: 'findOne'
  },
  'PUT /tasks/:id': {
    controller: 'TaskController',
    action: 'update'
  },
  'DELETE /tasks/:id': {
    controller: 'TaskController',
    action: 'destroy'
  },
  'POST /tasks/:id/uploaddeliverable': {
    controller: 'TaskController',
    action: 'uploadFile'
  },
  'GET /tasks/:id/downloaddeliverable': {
    controller: 'TaskController',
    action: 'downloadFile'
  },

  // asset
  'GET /assets': {
    controller: 'AssetController',
    action: 'find'
  },

  // webhook
  'GET /webhooks': {
    controller: 'WebhookController',
    action: 'find'
  },
  'POST /webhooks': {
    controller: 'WebhookController',
    action: 'create'
  },

  'DELETE /webhooks/:id': {
    controller: 'WebhookController',
    action: 'destroy'
  },
  'GET /webhooks/:id': {
    controller: 'WebhookController',
    action: 'findOne'
  },
  'PUT /webhooks/:id': {
    controller: 'WebhookController',
    action: 'update'
  }


  };
