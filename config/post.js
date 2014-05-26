module.exports = {

  httpVerb: 'GET',

  url: '/post/{id}',

  options: {
    pre: [
      { method: function(request, reply) {
          reply({ id: request.params.id, name: 'First Post!!'});
        }, assign: 'post'
      }
    ],
    handler: function(request, reply) {

      var post = request.pre.post;
      reply({ name: 'Fetching post with id of ' + post.id + ' and name of ' + post.name });
    }
  }
};
