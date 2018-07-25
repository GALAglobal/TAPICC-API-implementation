module.exports.swagger = {
    /**
     * require() the package.json file for your Sails app.
     */
    pkg: require('../package'),
    host: 'localhost:1337',
    ui: {
        url: 'http://localhost:1337/docs'
    },
    definitions: {
        job: {
            required: ['name']
        }
    }
};