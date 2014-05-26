var configs = require('./config');
var _  = require('underscore');

module.exports = function() {

  return _.map(configs, function(config) {
      return {
        method: config.httpVerb,
        path: config.url,
        config: config.options
      };
   });
};
