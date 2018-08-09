/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
import { Model } from 'sails-typings';
declare var Task: Model;
declare var sails;
const path = require('path');



module.exports = {
    
    'uploadFile': (req, res) => {
        const dirname = path.resolve(sails.config.appPath, 'assets/deliverables');
        req.file('deliverable').upload({ dirname }, function (err, uploadedFiles) {
          if (err) return res.serverError(err);
          Task.update(req.param('id'), {
            progress: 'finished',
            fileDescriptor: uploadedFiles[0].fd,
            fileOriginalName: uploadedFiles[0].filename
          }, function (err, result) {
            if (err) return res.serverError(err);
            return res.json(result);
          });
        });
      },
    
      'downloadFile': (req, res) => {
        Task.findOne(req.param('id')).exec(function (err, task) {
          if (err) return res.serverError(err);
          if (!task) return res.notFound();
          if (!task.fileDescriptor) return res.notFound();
    
          const SkipperDisk = require('skipper-disk');
          const fileAdapter = SkipperDisk();
    
          // set the filename to the same file as the user uploaded
          res.set("Content-disposition", "attachment; filename=" + task.fileOriginalName + "");
          
          // Stream the file down
          fileAdapter.read(task.fileDescriptor)
            .on('error', function (err) {
              return res.serverError(err);
            })
            .pipe(res);
        });
      }

};

