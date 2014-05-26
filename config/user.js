module.exports = {

  httpVerb: 'GET',

  url: '/user',

	options: {
    handler: function(request, reply) {
      reply({ name: 'Cranberry'});
    }
  }
};
