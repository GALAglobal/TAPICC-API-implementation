/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
import express = require('express');
import { Model } from 'sails-typings';
declare var Task: Model;
declare var Job: Model;


module.exports = {
    
    'uploadFile': (req: express.Request, res: express.Response) => {

        // request body should contain:
        // isReference
        // sourceLanguage
        // encoding
        // tasks
        
        const id = req.param('id');
        console.log(id);

        Job.find({ id }).exec((err, theUser) => {
            console.log(err);
            console.log(theUser);                
            if (err) return res.send(err);
            if (!theUser || theUser.length < 1) return res.send(`job ${id} not found`);
            console.log('test');
        });


        return res.send('body:' + JSON.stringify(req.body));
    },

    'downloadFile': (req, res) => {

    }

};

