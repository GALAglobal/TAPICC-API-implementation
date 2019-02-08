/**
 * InputController
 *
 * @description :: Server-side logic for managing Inputs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
import { Model } from 'sails-typings';
declare var Input: Model;
declare var sails;
const path = require('path');

module.exports = {

  'uploadFile': (req, res) => {
    const dirname = path.resolve(sails.config.appPath, 'assets/inputs');
    req.file('asset').upload({ dirname }, function (err, uploadedFiles) {
      if (err) return res.serverError(err);
      Input.create({
        sourceLanguage: req.param('sourceLanguage'),
        encoding: req.param('encoding'),
        jobId: req.param('parentid'),
        fileDescriptor: uploadedFiles[0].fd,
        fileOriginalName: uploadedFiles[0].filename
      }, function (err, result) {
        if (err) return res.serverError(err);
        return res.json(result);
      });
    });
  },

  'downloadFile': (req, res) => {
    Input.findOne(req.param('id')).exec(function (err, input) {
      if (err) return res.serverError(err);
      if (!input) return res.notFound();
      if (!input.fileDescriptor) return res.notFound();

      const SkipperDisk = require('skipper-disk');
      const fileAdapter = SkipperDisk();

      // set the filename to the same file as the user uploaded
      res.set("Content-disposition", "attachment; filename=" + input.fileOriginalName + "");
      
      // Stream the file down
      fileAdapter.read(input.fileDescriptor)
        .on('error', function (err) {
          return res.serverError(err);
        })
        .pipe(res);
    });
  }

};

